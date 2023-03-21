import { ApolloServer, BaseContext } from "@apollo/server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { buildSchemaSync } from "type-graphql";
import { resolvers } from "../../prisma/generated/type-graphql"

interface WePoolContext extends BaseContext {}
const schema = buildSchemaSync({ resolvers, validate: true });

const context = async () => {
  const prisma = new PrismaClient();
  return { prisma };
};

const apolloServer = new ApolloServer<WePoolContext>({ schema });

export const graphqlServer = startServerAndCreateLambdaHandler(
  apolloServer,
  handlers.createAPIGatewayProxyEventRequestHandler()
);
