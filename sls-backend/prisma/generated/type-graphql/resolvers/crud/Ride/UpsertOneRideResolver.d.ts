import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneRideArgs } from "./args/UpsertOneRideArgs";
import { Ride } from "../../../models/Ride";
export declare class UpsertOneRideResolver {
    upsertOneRide(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRideArgs): Promise<Ride>;
}
