import { CarUpdateOneWithoutDriverNestedInput } from "../inputs/CarUpdateOneWithoutDriverNestedInput";
import { CompanyUpdateOneRequiredWithoutUsersNestedInput } from "../inputs/CompanyUpdateOneRequiredWithoutUsersNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RideUpdateManyWithoutDriverNestedInput } from "../inputs/RideUpdateManyWithoutDriverNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutPassengerRidesInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    fname?: StringFieldUpdateOperationsInput | undefined;
    lname?: StringFieldUpdateOperationsInput | undefined;
    latitude?: NullableFloatFieldUpdateOperationsInput | undefined;
    longitude?: NullableFloatFieldUpdateOperationsInput | undefined;
    street?: NullableStringFieldUpdateOperationsInput | undefined;
    number?: NullableIntFieldUpdateOperationsInput | undefined;
    zipCode?: NullableIntFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    carId?: NullableIntFieldUpdateOperationsInput | undefined;
    car?: CarUpdateOneWithoutDriverNestedInput | undefined;
    driverRides?: RideUpdateManyWithoutDriverNestedInput | undefined;
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput | undefined;
}
