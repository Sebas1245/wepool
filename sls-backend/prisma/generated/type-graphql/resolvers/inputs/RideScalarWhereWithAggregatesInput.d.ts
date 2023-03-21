import { EnumRideStatusWithAggregatesFilter } from "../inputs/EnumRideStatusWithAggregatesFilter";
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
    driverId?: IntWithAggregatesFilter | undefined;
}
