import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRideArgs } from "./args/FindFirstRideArgs";
import { Ride } from "../../../models/Ride";
export declare class FindFirstRideResolver {
    findFirstRide(ctx: any, info: GraphQLResolveInfo, args: FindFirstRideArgs): Promise<Ride | null>;
}
