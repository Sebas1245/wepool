import { EnumRideStatusFieldUpdateOperationsInput } from "../inputs/EnumRideStatusFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
export declare class RideUpdateManyMutationInput {
    kmToGoalLocation?: FloatFieldUpdateOperationsInput | undefined;
    availableSeats?: IntFieldUpdateOperationsInput | undefined;
    status?: EnumRideStatusFieldUpdateOperationsInput | undefined;
}
