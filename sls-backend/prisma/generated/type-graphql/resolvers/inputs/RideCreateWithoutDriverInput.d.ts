import { RidePassengersCreateNestedManyWithoutRideInput } from "../inputs/RidePassengersCreateNestedManyWithoutRideInput";
export declare class RideCreateWithoutDriverInput {
    kmToGoalLocation: number;
    availableSeats: number;
    status: "OPEN" | "CLOSED";
    startsAt: "DRIVER" | "COMPANY";
    date: Date;
    passengers?: RidePassengersCreateNestedManyWithoutRideInput | undefined;
}
