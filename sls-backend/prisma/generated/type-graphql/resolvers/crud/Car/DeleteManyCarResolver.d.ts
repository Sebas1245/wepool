import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyCarArgs } from "./args/DeleteManyCarArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCarResolver {
    deleteManyCar(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCarArgs): Promise<AffectedRowsOutput>;
}
