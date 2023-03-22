import type { GraphQLResolveInfo } from "graphql";
import { Car } from "../../../models/Car";
import { Company } from "../../../models/Company";
import { Ride } from "../../../models/Ride";
import { RidePassengers } from "../../../models/RidePassengers";
import { User } from "../../../models/User";
import { UserDriverRidesArgs } from "./args/UserDriverRidesArgs";
import { UserPassengerRidesArgs } from "./args/UserPassengerRidesArgs";
export declare class UserRelationsResolver {
    car(user: User, ctx: any, info: GraphQLResolveInfo): Promise<Car | null>;
    driverRides(user: User, ctx: any, info: GraphQLResolveInfo, args: UserDriverRidesArgs): Promise<Ride[]>;
    passengerRides(user: User, ctx: any, info: GraphQLResolveInfo, args: UserPassengerRidesArgs): Promise<RidePassengers[]>;
    company(user: User, ctx: any, info: GraphQLResolveInfo): Promise<Company>;
}
