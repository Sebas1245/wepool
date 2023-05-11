import { CompanyCreateNestedOneWithoutUsersInput } from "../inputs/CompanyCreateNestedOneWithoutUsersInput";
import { RideCreateNestedManyWithoutDriverInput } from "../inputs/RideCreateNestedManyWithoutDriverInput";
import { RidePassengersCreateNestedManyWithoutPassengerInput } from "../inputs/RidePassengersCreateNestedManyWithoutPassengerInput";
export declare class UserCreateWithoutCarInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    fname: string;
    lname: string;
    email: string;
    latitude?: number | undefined;
    longitude?: number | undefined;
    rating?: number | undefined;
    street?: string | undefined;
    number?: number | undefined;
    zipCode?: number | undefined;
    city?: string | undefined;
    state?: string | undefined;
    country?: string | undefined;
    phoneNumber?: string | undefined;
    carId?: number | undefined;
    driverRides?: RideCreateNestedManyWithoutDriverInput | undefined;
    passengerRides?: RidePassengersCreateNestedManyWithoutPassengerInput | undefined;
    company: CompanyCreateNestedOneWithoutUsersInput;
}
