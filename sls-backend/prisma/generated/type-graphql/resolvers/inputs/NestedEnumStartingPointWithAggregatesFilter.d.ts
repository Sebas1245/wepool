import { NestedEnumStartingPointFilter } from "../inputs/NestedEnumStartingPointFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumStartingPointWithAggregatesFilter {
    equals?: "DRIVER" | "COMPANY" | undefined;
    in?: Array<"DRIVER" | "COMPANY"> | undefined;
    notIn?: Array<"DRIVER" | "COMPANY"> | undefined;
    not?: NestedEnumStartingPointWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumStartingPointFilter | undefined;
    _max?: NestedEnumStartingPointFilter | undefined;
}
