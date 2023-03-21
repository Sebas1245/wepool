import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPassengerRidesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPassengerRidesNestedInput";
export declare class RidePassengersUpdateWithoutRideInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    passenger?: UserUpdateOneRequiredWithoutPassengerRidesNestedInput | undefined;
}
