import { EnumRideStatusFieldUpdateOperationsInput } from "../inputs/EnumRideStatusFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { RidePassengersUpdateManyWithoutRideNestedInput } from "../inputs/RidePassengersUpdateManyWithoutRideNestedInput";
import { UserUpdateOneRequiredWithoutDriverRidesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutDriverRidesNestedInput";
export declare class RideUpdateInput {
    kmToGoalLocation?: FloatFieldUpdateOperationsInput | undefined;
    availableSeats?: IntFieldUpdateOperationsInput | undefined;
    status?: EnumRideStatusFieldUpdateOperationsInput | undefined;
    driver?: UserUpdateOneRequiredWithoutDriverRidesNestedInput | undefined;
    passengers?: RidePassengersUpdateManyWithoutRideNestedInput | undefined;
}
