import { Ride } from "../models/Ride";
import { User } from "../models/User";
export declare class RidePassengers {
    id: number;
    createdAt: Date;
    passenger?: User;
    passengerId: number;
    ride?: Ride;
    rideId: number;
}
