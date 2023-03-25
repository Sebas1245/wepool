import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyRidePassengersArgs } from "./args/DeleteManyRidePassengersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRidePassengersResolver {
    deleteManyRidePassengers(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRidePassengersArgs): Promise<AffectedRowsOutput>;
}
