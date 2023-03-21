import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyRideArgs } from "./args/DeleteManyRideArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRideResolver {
    deleteManyRide(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRideArgs): Promise<AffectedRowsOutput>;
}
