import { RidePassengersOrderByRelationAggregateInput } from "../inputs/RidePassengersOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class RideOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    kmToGoalLocation?: "asc" | "desc" | undefined;
    availableSeats?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    driverId?: "asc" | "desc" | undefined;
    driver?: UserOrderByWithRelationInput | undefined;
    passengers?: RidePassengersOrderByRelationAggregateInput | undefined;
}
