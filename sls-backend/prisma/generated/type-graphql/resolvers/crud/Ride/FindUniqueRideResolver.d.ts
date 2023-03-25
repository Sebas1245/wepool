import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRideArgs } from "./args/FindUniqueRideArgs";
import { Ride } from "../../../models/Ride";
export declare class FindUniqueRideResolver {
    ride(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRideArgs): Promise<Ride | null>;
}
