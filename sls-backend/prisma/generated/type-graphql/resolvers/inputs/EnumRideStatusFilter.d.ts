import { NestedEnumRideStatusFilter } from "../inputs/NestedEnumRideStatusFilter";
export declare class EnumRideStatusFilter {
    equals?: "OPEN" | "CLOSED" | undefined;
    in?: Array<"OPEN" | "CLOSED"> | undefined;
    notIn?: Array<"OPEN" | "CLOSED"> | undefined;
    not?: NestedEnumRideStatusFilter | undefined;
}
