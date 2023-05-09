import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CarUpdateManyMutationInput {
    brand?: StringFieldUpdateOperationsInput | undefined;
    model?: StringFieldUpdateOperationsInput | undefined;
    year?: IntFieldUpdateOperationsInput | undefined;
    plateNumber?: StringFieldUpdateOperationsInput | undefined;
    capacity?: NullableIntFieldUpdateOperationsInput | undefined;
    color?: StringFieldUpdateOperationsInput | undefined;
}
