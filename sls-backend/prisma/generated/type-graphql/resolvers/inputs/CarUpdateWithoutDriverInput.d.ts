import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CarUpdateWithoutDriverInput {
    brand?: StringFieldUpdateOperationsInput | undefined;
    model?: StringFieldUpdateOperationsInput | undefined;
    year?: IntFieldUpdateOperationsInput | undefined;
    plateNumber?: StringFieldUpdateOperationsInput | undefined;
    capacity?: IntFieldUpdateOperationsInput | undefined;
    color?: StringFieldUpdateOperationsInput | undefined;
}