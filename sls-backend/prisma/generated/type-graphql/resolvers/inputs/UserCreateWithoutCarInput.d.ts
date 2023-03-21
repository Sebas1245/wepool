import { RideCreateNestedManyWithoutDriverInput } from "../inputs/RideCreateNestedManyWithoutDriverInput";
import { RidePassengersCreateNestedManyWithoutPassengerInput } from "../inputs/RidePassengersCreateNestedManyWithoutPassengerInput";
export declare class UserCreateWithoutCarInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    fname: string;
    lname: string;
    latitude: number;
    longitude: number;
    street?: string | undefined;
    number?: number | undefined;
    zipCode?: number | undefined;
    city?: string | undefined;
    state?: string | undefined;
    country?: string | undefined;
    driverRides?: RideCreateNestedManyWithoutDriverInput | undefined;
    passengerRides?: RidePassengersCreateNestedManyWithoutPassengerInput | undefined;
}
