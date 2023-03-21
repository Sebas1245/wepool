import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRideOrThrowArgs } from "./args/FindUniqueRideOrThrowArgs";
import { Ride } from "../../../models/Ride";
export declare class FindUniqueRideOrThrowResolver {
    getRide(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRideOrThrowArgs): Promise<Ride | null>;
}
