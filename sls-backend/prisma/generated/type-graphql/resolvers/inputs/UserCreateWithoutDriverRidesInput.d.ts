import { CarCreateNestedOneWithoutDriverInput } from "../inputs/CarCreateNestedOneWithoutDriverInput";
import { RidePassengersCreateNestedManyWithoutPassengerInput } from "../inputs/RidePassengersCreateNestedManyWithoutPassengerInput";
export declare class UserCreateWithoutDriverRidesInput {
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
    car?: CarCreateNestedOneWithoutDriverInput | undefined;
    passengerRides?: RidePassengersCreateNestedManyWithoutPassengerInput | undefined;
}
