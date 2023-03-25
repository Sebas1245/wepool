import { RidePassengers } from "../models/RidePassengers";
import { User } from "../models/User";
import { RideCount } from "../resolvers/outputs/RideCount";
export declare class Ride {
    id: number;
    kmToGoalLocation: number;
    availableSeats: number;
    status: "OPEN" | "CLOSED";
    startsAt: "DRIVER" | "COMPANY";
    driver?: User;
    driverId: number;
    passengers?: RidePassengers[];
    _count?: RideCount | null;
}
