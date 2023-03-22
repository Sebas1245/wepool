import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CompanyUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    latitude?: NullableFloatFieldUpdateOperationsInput | undefined;
    longitude?: NullableFloatFieldUpdateOperationsInput | undefined;
    street?: StringFieldUpdateOperationsInput | undefined;
    number?: IntFieldUpdateOperationsInput | undefined;
    zipCode?: IntFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    state?: StringFieldUpdateOperationsInput | undefined;
    country?: StringFieldUpdateOperationsInput | undefined;
}
