import { EnumRideStatusFieldUpdateOperationsInput } from "../inputs/EnumRideStatusFieldUpdateOperationsInput";
import { EnumStartingPointFieldUpdateOperationsInput } from "../inputs/EnumStartingPointFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutDriverRidesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutDriverRidesNestedInput";
export declare class RideUpdateWithoutPassengersInput {
    kmToGoalLocation?: FloatFieldUpdateOperationsInput | undefined;
    availableSeats?: IntFieldUpdateOperationsInput | undefined;
    status?: EnumRideStatusFieldUpdateOperationsInput | undefined;
    startsAt?: EnumStartingPointFieldUpdateOperationsInput | undefined;
    driver?: UserUpdateOneRequiredWithoutDriverRidesNestedInput | undefined;
}
