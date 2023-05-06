import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRideStatusFilter } from "../inputs/EnumRideStatusFilter";
import { EnumStartingPointFilter } from "../inputs/EnumStartingPointFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
export declare class RideScalarWhereInput {
    AND?: RideScalarWhereInput[] | undefined;
    OR?: RideScalarWhereInput[] | undefined;
    NOT?: RideScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    kmToGoalLocation?: FloatFilter | undefined;
    availableSeats?: IntFilter | undefined;
    status?: EnumRideStatusFilter | undefined;
    startsAt?: EnumStartingPointFilter | undefined;
    date?: DateTimeFilter | undefined;
    driverId?: IntFilter | undefined;
}
