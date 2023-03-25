import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneRideArgs } from "./args/UpdateOneRideArgs";
import { Ride } from "../../../models/Ride";
export declare class UpdateOneRideResolver {
    updateOneRide(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRideArgs): Promise<Ride | null>;
}
