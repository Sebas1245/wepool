import type { GraphQLResolveInfo } from "graphql";
import { GroupByRideArgs } from "./args/GroupByRideArgs";
import { RideGroupBy } from "../../outputs/RideGroupBy";
export declare class GroupByRideResolver {
    groupByRide(ctx: any, info: GraphQLResolveInfo, args: GroupByRideArgs): Promise<RideGroupBy[]>;
}
