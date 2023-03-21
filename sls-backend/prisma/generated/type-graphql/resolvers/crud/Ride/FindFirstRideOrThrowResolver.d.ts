import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRideOrThrowArgs } from "./args/FindFirstRideOrThrowArgs";
import { Ride } from "../../../models/Ride";
export declare class FindFirstRideOrThrowResolver {
    findFirstRideOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRideOrThrowArgs): Promise<Ride | null>;
}
