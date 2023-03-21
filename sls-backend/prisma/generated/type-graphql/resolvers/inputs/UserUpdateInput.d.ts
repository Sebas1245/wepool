import { CarUpdateOneWithoutDriverNestedInput } from "../inputs/CarUpdateOneWithoutDriverNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RidePassengersUpdateManyWithoutPassengerNestedInput } from "../inputs/RidePassengersUpdateManyWithoutPassengerNestedInput";
import { RideUpdateManyWithoutDriverNestedInput } from "../inputs/RideUpdateManyWithoutDriverNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    fname?: StringFieldUpdateOperationsInput | undefined;
    lname?: StringFieldUpdateOperationsInput | undefined;
    latitude?: FloatFieldUpdateOperationsInput | undefined;
    longitude?: FloatFieldUpdateOperationsInput | undefined;
    street?: NullableStringFieldUpdateOperationsInput | undefined;
    number?: NullableIntFieldUpdateOperationsInput | undefined;
    zipCode?: NullableIntFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    car?: CarUpdateOneWithoutDriverNestedInput | undefined;
    driverRides?: RideUpdateManyWithoutDriverNestedInput | undefined;
    passengerRides?: RidePassengersUpdateManyWithoutPassengerNestedInput | undefined;
}
