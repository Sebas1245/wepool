import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { RideUpdateOneRequiredWithoutPassengersNestedInput } from "../inputs/RideUpdateOneRequiredWithoutPassengersNestedInput";
export declare class RidePassengersUpdateWithoutPassengerInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    ride?: RideUpdateOneRequiredWithoutPassengersNestedInput | undefined;
}
