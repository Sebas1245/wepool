import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { RideUpdateOneRequiredWithoutPassengersNestedInput } from "../inputs/RideUpdateOneRequiredWithoutPassengersNestedInput";
import { UserUpdateOneRequiredWithoutPassengerRidesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPassengerRidesNestedInput";
export declare class RidePassengersUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    passenger?: UserUpdateOneRequiredWithoutPassengerRidesNestedInput | undefined;
    ride?: RideUpdateOneRequiredWithoutPassengersNestedInput | undefined;
}
