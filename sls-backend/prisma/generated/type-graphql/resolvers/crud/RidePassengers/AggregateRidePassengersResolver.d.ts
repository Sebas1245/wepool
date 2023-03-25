import type { GraphQLResolveInfo } from "graphql";
import { AggregateRidePassengersArgs } from "./args/AggregateRidePassengersArgs";
import { AggregateRidePassengers } from "../../outputs/AggregateRidePassengers";
export declare class AggregateRidePassengersResolver {
    aggregateRidePassengers(ctx: any, info: GraphQLResolveInfo, args: AggregateRidePassengersArgs): Promise<AggregateRidePassengers>;
}
