import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRidePassengersArgs } from "./args/FindUniqueRidePassengersArgs";
import { RidePassengers } from "../../../models/RidePassengers";
export declare class FindUniqueRidePassengersResolver {
    findUniqueRidePassengers(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRidePassengersArgs): Promise<RidePassengers | null>;
}
