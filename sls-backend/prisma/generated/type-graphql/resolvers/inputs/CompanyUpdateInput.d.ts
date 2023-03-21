import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CompanyUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    latitude?: FloatFieldUpdateOperationsInput | undefined;
    longitude?: FloatFieldUpdateOperationsInput | undefined;
    street?: StringFieldUpdateOperationsInput | undefined;
    number?: IntFieldUpdateOperationsInput | undefined;
    zipCode?: IntFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    state?: StringFieldUpdateOperationsInput | undefined;
    country?: StringFieldUpdateOperationsInput | undefined;
}
