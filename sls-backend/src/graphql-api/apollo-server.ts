import { ApolloServer } from "@apollo/server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import { resolvers } from "./resolvers";
import { typeDefs } from "./types/type-defs";

// TOOD - Add custom context for our GraphQL API
type WePoolContext = {};

const apolloServer = new ApolloServer<WePoolContext>({ typeDefs, resolvers });

export const graphqlServer = startServerAndCreateLambdaHandler(
  apolloServer,
  handlers.createAPIGatewayProxyEventRequestHandler()
);
