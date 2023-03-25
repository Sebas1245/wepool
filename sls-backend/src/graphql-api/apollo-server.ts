import { ApolloServer, BaseContext } from "@apollo/server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { buildSchemaSync } from "type-graphql";
import { resolvers } from "../../prisma/generated/type-graphql";

interface WePoolContext extends BaseContext {
  prisma: PrismaClient;
}
const schema = buildSchemaSync({
  resolvers: resolvers,
  validate: { forbidUnknownValues: false },
});

const context = async () => {
  const prisma = new PrismaClient();
  return { prisma };
};

// TODO - Add format error function
const apolloServer = new ApolloServer<WePoolContext>({ schema });

export const graphqlServer = startServerAndCreateLambdaHandler(
  apolloServer,
  handlers.createAPIGatewayProxyEventRequestHandler(),
  {
    context,
  }
);
