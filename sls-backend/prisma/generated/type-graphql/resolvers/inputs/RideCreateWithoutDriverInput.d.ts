import { RidePassengersCreateNestedManyWithoutRideInput } from "../inputs/RidePassengersCreateNestedManyWithoutRideInput";
export declare class RideCreateWithoutDriverInput {
    kmToGoalLocation: number;
    availableSeats: number;
    status: "OPEN" | "CLOSED";
    startsAt: "DRIVER" | "COMPANY";
    passengers?: RidePassengersCreateNestedManyWithoutRideInput | undefined;
}
