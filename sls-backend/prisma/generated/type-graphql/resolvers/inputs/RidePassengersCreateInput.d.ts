import { RideCreateNestedOneWithoutPassengersInput } from "../inputs/RideCreateNestedOneWithoutPassengersInput";
import { UserCreateNestedOneWithoutPassengerRidesInput } from "../inputs/UserCreateNestedOneWithoutPassengerRidesInput";
export declare class RidePassengersCreateInput {
    createdAt?: Date | undefined;
    passenger: UserCreateNestedOneWithoutPassengerRidesInput;
    ride: RideCreateNestedOneWithoutPassengersInput;
}
