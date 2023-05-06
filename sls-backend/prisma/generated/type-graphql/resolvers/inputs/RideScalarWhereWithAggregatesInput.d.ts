import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumRideStatusWithAggregatesFilter } from "../inputs/EnumRideStatusWithAggregatesFilter";
import { EnumStartingPointWithAggregatesFilter } from "../inputs/EnumStartingPointWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
export declare class RideScalarWhereWithAggregatesInput {
    AND?: RideScalarWhereWithAggregatesInput[] | undefined;
    OR?: RideScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RideScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    kmToGoalLocation?: FloatWithAggregatesFilter | undefined;
    availableSeats?: IntWithAggregatesFilter | undefined;
    status?: EnumRideStatusWithAggregatesFilter | undefined;
    startsAt?: EnumStartingPointWithAggregatesFilter | undefined;
    date?: DateTimeWithAggregatesFilter | undefined;
    driverId?: IntWithAggregatesFilter | undefined;
}
