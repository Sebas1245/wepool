import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRidePassengersOrThrowArgs } from "./args/FindFirstRidePassengersOrThrowArgs";
import { RidePassengers } from "../../../models/RidePassengers";
export declare class FindFirstRidePassengersOrThrowResolver {
    findFirstRidePassengersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRidePassengersOrThrowArgs): Promise<RidePassengers | null>;
}
