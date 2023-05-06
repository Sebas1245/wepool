import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRideStatusFieldUpdateOperationsInput } from "../inputs/EnumRideStatusFieldUpdateOperationsInput";
import { EnumStartingPointFieldUpdateOperationsInput } from "../inputs/EnumStartingPointFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { RidePassengersUpdateManyWithoutRideNestedInput } from "../inputs/RidePassengersUpdateManyWithoutRideNestedInput";
export declare class RideUpdateWithoutDriverInput {
    kmToGoalLocation?: FloatFieldUpdateOperationsInput | undefined;
    availableSeats?: IntFieldUpdateOperationsInput | undefined;
    status?: EnumRideStatusFieldUpdateOperationsInput | undefined;
    startsAt?: EnumStartingPointFieldUpdateOperationsInput | undefined;
    date?: DateTimeFieldUpdateOperationsInput | undefined;
    passengers?: RidePassengersUpdateManyWithoutRideNestedInput | undefined;
}
