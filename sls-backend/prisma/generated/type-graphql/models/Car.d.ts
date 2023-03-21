import { User } from "../models/User";
export declare class Car {
    id: number;
    brand: string;
    model: string;
    year: number;
    plateNumber: string;
    capacity: number;
    driver?: User;
    driverId: number;
}
