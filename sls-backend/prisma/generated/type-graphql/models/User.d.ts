import { Car } from "../models/Car";
import { Ride } from "../models/Ride";
import { RidePassengers } from "../models/RidePassengers";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    fname: string;
    lname: string;
    latitude: number;
    longitude: number;
    street?: string | null;
    number?: number | null;
    zipCode?: number | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    car?: Car | null;
    driverRides?: Ride[];
    passengerRides?: RidePassengers[];
    _count?: UserCount | null;
}
