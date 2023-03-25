import type { GraphQLResolveInfo } from "graphql";
import { GroupByRidePassengersArgs } from "./args/GroupByRidePassengersArgs";
import { RidePassengersGroupBy } from "../../outputs/RidePassengersGroupBy";
export declare class GroupByRidePassengersResolver {
    groupByRidePassengers(ctx: any, info: GraphQLResolveInfo, args: GroupByRidePassengersArgs): Promise<RidePassengersGroupBy[]>;
}
