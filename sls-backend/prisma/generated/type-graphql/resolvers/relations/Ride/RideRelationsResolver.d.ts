import type { GraphQLResolveInfo } from "graphql";
import { Ride } from "../../../models/Ride";
import { RidePassengers } from "../../../models/RidePassengers";
import { User } from "../../../models/User";
import { RidePassengersArgs } from "./args/RidePassengersArgs";
export declare class RideRelationsResolver {
    driver(ride: Ride, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    passengers(ride: Ride, ctx: any, info: GraphQLResolveInfo, args: RidePassengersArgs): Promise<RidePassengers[]>;
}
