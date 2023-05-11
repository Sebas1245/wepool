import { CarUpdateOneWithoutDriverNestedInput } from "../inputs/CarUpdateOneWithoutDriverNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RidePassengersUpdateManyWithoutPassengerNestedInput } from "../inputs/RidePassengersUpdateManyWithoutPassengerNestedInput";
import { RideUpdateManyWithoutDriverNestedInput } from "../inputs/RideUpdateManyWithoutDriverNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutCompanyInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    fname?: StringFieldUpdateOperationsInput | undefined;
    lname?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    latitude?: NullableFloatFieldUpdateOperationsInput | undefined;
    longitude?: NullableFloatFieldUpdateOperationsInput | undefined;
    rating?: NullableFloatFieldUpdateOperationsInput | undefined;
    street?: NullableStringFieldUpdateOperationsInput | undefined;
    number?: NullableIntFieldUpdateOperationsInput | undefined;
    zipCode?: NullableIntFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | undefined;
    carId?: NullableIntFieldUpdateOperationsInput | undefined;
    car?: CarUpdateOneWithoutDriverNestedInput | undefined;
    driverRides?: RideUpdateManyWithoutDriverNestedInput | undefined;
    passengerRides?: RidePassengersUpdateManyWithoutPassengerNestedInput | undefined;
}
