import { RideOrderByWithRelationInput } from "../inputs/RideOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class RidePassengersOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    passengerId?: "asc" | "desc" | undefined;
    rideId?: "asc" | "desc" | undefined;
    passenger?: UserOrderByWithRelationInput | undefined;
    ride?: RideOrderByWithRelationInput | undefined;
}
