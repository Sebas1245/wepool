import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRideArgs } from "./args/CreateOneRideArgs";
import { Ride } from "../../../models/Ride";
export declare class CreateOneRideResolver {
    createOneRide(ctx: any, info: GraphQLResolveInfo, args: CreateOneRideArgs): Promise<Ride>;
}
