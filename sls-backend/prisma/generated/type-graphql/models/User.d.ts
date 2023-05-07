import { Car } from "../models/Car";
import { Company } from "../models/Company";
import { Ride } from "../models/Ride";
import { RidePassengers } from "../models/RidePassengers";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    fname: string;
    lname: string;
    email: string;
    latitude?: number | null;
    longitude?: number | null;
    street?: string | null;
    number?: number | null;
    zipCode?: number | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    phoneNumber?: string | null;
    car?: Car | null;
    carId?: number | null;
    driverRides?: Ride[];
    passengerRides?: RidePassengers[];
    company?: Company;
    companyId: number;
    _count?: UserCount | null;
}
