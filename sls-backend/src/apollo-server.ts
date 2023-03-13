import { ApolloServer } from "apollo-server-lambda";
import { resolvers } from "./resolvers";
import { typeDefs } from "./types/type-defs";

const apolloServer = new ApolloServer({ typeDefs , resolvers });

export const graphqlServer = apolloServer.createHandler();
