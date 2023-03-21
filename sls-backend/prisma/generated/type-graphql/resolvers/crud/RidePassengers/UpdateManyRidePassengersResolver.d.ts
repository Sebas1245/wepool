import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyRidePassengersArgs } from "./args/UpdateManyRidePassengersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRidePassengersResolver {
    updateManyRidePassengers(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRidePassengersArgs): Promise<AffectedRowsOutput>;
}
