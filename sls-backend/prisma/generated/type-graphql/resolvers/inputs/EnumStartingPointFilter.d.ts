import { NestedEnumStartingPointFilter } from "../inputs/NestedEnumStartingPointFilter";
export declare class EnumStartingPointFilter {
    equals?: "DRIVER" | "COMPANY" | undefined;
    in?: Array<"DRIVER" | "COMPANY"> | undefined;
    notIn?: Array<"DRIVER" | "COMPANY"> | undefined;
    not?: NestedEnumStartingPointFilter | undefined;
}
