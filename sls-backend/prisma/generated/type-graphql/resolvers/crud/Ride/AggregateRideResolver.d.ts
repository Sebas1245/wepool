import type { GraphQLResolveInfo } from "graphql";
import { AggregateRideArgs } from "./args/AggregateRideArgs";
import { AggregateRide } from "../../outputs/AggregateRide";
export declare class AggregateRideResolver {
    aggregateRide(ctx: any, info: GraphQLResolveInfo, args: AggregateRideArgs): Promise<AggregateRide>;
}
