import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
export declare class RidePassengersScalarWhereWithAggregatesInput {
    AND?: RidePassengersScalarWhereWithAggregatesInput[] | undefined;
    OR?: RidePassengersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RidePassengersScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    passengerId?: IntWithAggregatesFilter | undefined;
    rideId?: IntWithAggregatesFilter | undefined;
}
