import { RideAvgOrderByAggregateInput } from "../inputs/RideAvgOrderByAggregateInput";
import { RideCountOrderByAggregateInput } from "../inputs/RideCountOrderByAggregateInput";
import { RideMaxOrderByAggregateInput } from "../inputs/RideMaxOrderByAggregateInput";
import { RideMinOrderByAggregateInput } from "../inputs/RideMinOrderByAggregateInput";
import { RideSumOrderByAggregateInput } from "../inputs/RideSumOrderByAggregateInput";
export declare class RideOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    kmToGoalLocation?: "asc" | "desc" | undefined;
    availableSeats?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    startsAt?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    driverId?: "asc" | "desc" | undefined;
    _count?: RideCountOrderByAggregateInput | undefined;
    _avg?: RideAvgOrderByAggregateInput | undefined;
    _max?: RideMaxOrderByAggregateInput | undefined;
    _min?: RideMinOrderByAggregateInput | undefined;
    _sum?: RideSumOrderByAggregateInput | undefined;
}
