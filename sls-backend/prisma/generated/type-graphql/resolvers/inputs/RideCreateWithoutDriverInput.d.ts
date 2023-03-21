import { RidePassengersCreateNestedManyWithoutRideInput } from "../inputs/RidePassengersCreateNestedManyWithoutRideInput";
export declare class RideCreateWithoutDriverInput {
    kmToGoalLocation: number;
    availableSeats: number;
    status: "OPEN" | "CLOSED";
    passengers?: RidePassengersCreateNestedManyWithoutRideInput | undefined;
}
