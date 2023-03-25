import type { GraphQLResolveInfo } from "graphql";
import { FindManyRideArgs } from "./args/FindManyRideArgs";
import { Ride } from "../../../models/Ride";
export declare class FindManyRideResolver {
    rides(ctx: any, info: GraphQLResolveInfo, args: FindManyRideArgs): Promise<Ride[]>;
}
