import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRidePassengersOrThrowArgs } from "./args/FindUniqueRidePassengersOrThrowArgs";
import { RidePassengers } from "../../../models/RidePassengers";
export declare class FindUniqueRidePassengersOrThrowResolver {
    findUniqueRidePassengersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRidePassengersOrThrowArgs): Promise<RidePassengers | null>;
}
