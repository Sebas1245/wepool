import { UserCreateNestedOneWithoutDriverRidesInput } from "../inputs/UserCreateNestedOneWithoutDriverRidesInput";
export declare class RideCreateWithoutPassengersInput {
    kmToGoalLocation: number;
    availableSeats: number;
    status: "OPEN" | "CLOSED";
    startsAt: "DRIVER" | "COMPANY";
    date: Date;
    driver: UserCreateNestedOneWithoutDriverRidesInput;
}
