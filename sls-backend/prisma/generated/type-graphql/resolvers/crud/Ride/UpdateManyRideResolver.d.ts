import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyRideArgs } from "./args/UpdateManyRideArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRideResolver {
    updateManyRide(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRideArgs): Promise<AffectedRowsOutput>;
}
