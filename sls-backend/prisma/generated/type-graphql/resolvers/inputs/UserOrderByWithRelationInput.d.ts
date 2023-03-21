import { CarOrderByWithRelationInput } from "../inputs/CarOrderByWithRelationInput";
import { RideOrderByRelationAggregateInput } from "../inputs/RideOrderByRelationAggregateInput";
import { RidePassengersOrderByRelationAggregateInput } from "../inputs/RidePassengersOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    fname?: "asc" | "desc" | undefined;
    lname?: "asc" | "desc" | undefined;
    latitude?: "asc" | "desc" | undefined;
    longitude?: "asc" | "desc" | undefined;
    street?: "asc" | "desc" | undefined;
    number?: "asc" | "desc" | undefined;
    zipCode?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    car?: CarOrderByWithRelationInput | undefined;
    driverRides?: RideOrderByRelationAggregateInput | undefined;
    passengerRides?: RidePassengersOrderByRelationAggregateInput | undefined;
}
