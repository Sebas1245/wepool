import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRidePassengersArgs } from "./args/FindFirstRidePassengersArgs";
import { RidePassengers } from "../../../models/RidePassengers";
export declare class FindFirstRidePassengersResolver {
    findFirstRidePassengers(ctx: any, info: GraphQLResolveInfo, args: FindFirstRidePassengersArgs): Promise<RidePassengers | null>;
}
