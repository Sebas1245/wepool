import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCarArgs } from "./args/CreateManyCarArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCarResolver {
    createManyCar(ctx: any, info: GraphQLResolveInfo, args: CreateManyCarArgs): Promise<AffectedRowsOutput>;
}
