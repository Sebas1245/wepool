import { CarAvgOrderByAggregateInput } from "../inputs/CarAvgOrderByAggregateInput";
import { CarCountOrderByAggregateInput } from "../inputs/CarCountOrderByAggregateInput";
import { CarMaxOrderByAggregateInput } from "../inputs/CarMaxOrderByAggregateInput";
import { CarMinOrderByAggregateInput } from "../inputs/CarMinOrderByAggregateInput";
import { CarSumOrderByAggregateInput } from "../inputs/CarSumOrderByAggregateInput";
export declare class CarOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    brand?: "asc" | "desc" | undefined;
    model?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    plateNumber?: "asc" | "desc" | undefined;
    capacity?: "asc" | "desc" | undefined;
    driverId?: "asc" | "desc" | undefined;
    _count?: CarCountOrderByAggregateInput | undefined;
    _avg?: CarAvgOrderByAggregateInput | undefined;
    _max?: CarMaxOrderByAggregateInput | undefined;
    _min?: CarMinOrderByAggregateInput | undefined;
    _sum?: CarSumOrderByAggregateInput | undefined;
}
