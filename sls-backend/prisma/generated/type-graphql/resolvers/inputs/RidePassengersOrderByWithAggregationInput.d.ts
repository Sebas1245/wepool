import { RidePassengersAvgOrderByAggregateInput } from "../inputs/RidePassengersAvgOrderByAggregateInput";
import { RidePassengersCountOrderByAggregateInput } from "../inputs/RidePassengersCountOrderByAggregateInput";
import { RidePassengersMaxOrderByAggregateInput } from "../inputs/RidePassengersMaxOrderByAggregateInput";
import { RidePassengersMinOrderByAggregateInput } from "../inputs/RidePassengersMinOrderByAggregateInput";
import { RidePassengersSumOrderByAggregateInput } from "../inputs/RidePassengersSumOrderByAggregateInput";
export declare class RidePassengersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    passengerId?: "asc" | "desc" | undefined;
    rideId?: "asc" | "desc" | undefined;
    _count?: RidePassengersCountOrderByAggregateInput | undefined;
    _avg?: RidePassengersAvgOrderByAggregateInput | undefined;
    _max?: RidePassengersMaxOrderByAggregateInput | undefined;
    _min?: RidePassengersMinOrderByAggregateInput | undefined;
    _sum?: RidePassengersSumOrderByAggregateInput | undefined;
}
