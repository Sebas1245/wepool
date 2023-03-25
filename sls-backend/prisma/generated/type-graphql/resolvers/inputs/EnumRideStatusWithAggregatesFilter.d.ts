import { NestedEnumRideStatusFilter } from "../inputs/NestedEnumRideStatusFilter";
import { NestedEnumRideStatusWithAggregatesFilter } from "../inputs/NestedEnumRideStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumRideStatusWithAggregatesFilter {
    equals?: "OPEN" | "CLOSED" | undefined;
    in?: Array<"OPEN" | "CLOSED"> | undefined;
    notIn?: Array<"OPEN" | "CLOSED"> | undefined;
    not?: NestedEnumRideStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumRideStatusFilter | undefined;
    _max?: NestedEnumRideStatusFilter | undefined;
}
