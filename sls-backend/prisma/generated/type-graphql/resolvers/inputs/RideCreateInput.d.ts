import { RidePassengersCreateNestedManyWithoutRideInput } from "../inputs/RidePassengersCreateNestedManyWithoutRideInput";
import { UserCreateNestedOneWithoutDriverRidesInput } from "../inputs/UserCreateNestedOneWithoutDriverRidesInput";
export declare class RideCreateInput {
    kmToGoalLocation: number;
    availableSeats: number;
    status: "OPEN" | "CLOSED";
    driver: UserCreateNestedOneWithoutDriverRidesInput;
    passengers?: RidePassengersCreateNestedManyWithoutRideInput | undefined;
}
