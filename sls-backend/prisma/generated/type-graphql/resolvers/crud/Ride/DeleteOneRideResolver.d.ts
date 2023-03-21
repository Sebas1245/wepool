import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneRideArgs } from "./args/DeleteOneRideArgs";
import { Ride } from "../../../models/Ride";
export declare class DeleteOneRideResolver {
    deleteOneRide(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRideArgs): Promise<Ride | null>;
}
