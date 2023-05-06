import { RidePassengersCreateNestedManyWithoutRideInput } from "../inputs/RidePassengersCreateNestedManyWithoutRideInput";
import { UserCreateNestedOneWithoutDriverRidesInput } from "../inputs/UserCreateNestedOneWithoutDriverRidesInput";
export declare class RideCreateInput {
    kmToGoalLocation: number;
    availableSeats: number;
    status: "OPEN" | "CLOSED";
    startsAt: "DRIVER" | "COMPANY";
    date: Date;
    driver: UserCreateNestedOneWithoutDriverRidesInput;
    passengers?: RidePassengersCreateNestedManyWithoutRideInput | undefined;
}
