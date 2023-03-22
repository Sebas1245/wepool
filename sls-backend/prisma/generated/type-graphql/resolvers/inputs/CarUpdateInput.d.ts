import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCarNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCarNestedInput";
export declare class CarUpdateInput {
    brand?: StringFieldUpdateOperationsInput | undefined;
    model?: StringFieldUpdateOperationsInput | undefined;
    year?: IntFieldUpdateOperationsInput | undefined;
    plateNumber?: StringFieldUpdateOperationsInput | undefined;
    capacity?: IntFieldUpdateOperationsInput | undefined;
    color?: StringFieldUpdateOperationsInput | undefined;
    driver?: UserUpdateOneRequiredWithoutCarNestedInput | undefined;
}
