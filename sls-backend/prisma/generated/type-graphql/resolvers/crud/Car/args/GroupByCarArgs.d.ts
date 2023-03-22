import { CarOrderByWithAggregationInput } from "../../../inputs/CarOrderByWithAggregationInput";
import { CarScalarWhereWithAggregatesInput } from "../../../inputs/CarScalarWhereWithAggregatesInput";
import { CarWhereInput } from "../../../inputs/CarWhereInput";
export declare class GroupByCarArgs {
    where?: CarWhereInput | undefined;
    orderBy?: CarOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "brand" | "model" | "year" | "plateNumber" | "capacity" | "color" | "driverId">;
    having?: CarScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
