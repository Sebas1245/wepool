import type { GraphQLResolveInfo } from "graphql";
import { Ride } from "../../../models/Ride";
import { RidePassengers } from "../../../models/RidePassengers";
import { User } from "../../../models/User";
export declare class RidePassengersRelationsResolver {
    passenger(ridePassengers: RidePassengers, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    ride(ridePassengers: RidePassengers, ctx: any, info: GraphQLResolveInfo): Promise<Ride>;
}
