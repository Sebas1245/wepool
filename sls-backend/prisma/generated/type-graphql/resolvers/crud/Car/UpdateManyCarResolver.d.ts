import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyCarArgs } from "./args/UpdateManyCarArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCarResolver {
    updateManyCar(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCarArgs): Promise<AffectedRowsOutput>;
}
