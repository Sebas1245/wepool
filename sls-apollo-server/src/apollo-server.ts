import { ApolloServer } from "apollo-server-lambda";
import { resolvers } from "./resolvers";
import { typeDefs } from "./type-defs";

const apolloServer = new ApolloServer({ typeDefs , resolvers });

export const graphqlServer = apolloServer.createHandler();
