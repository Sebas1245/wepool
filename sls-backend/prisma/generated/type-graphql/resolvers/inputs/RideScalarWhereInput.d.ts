import { EnumRideStatusFilter } from "../inputs/EnumRideStatusFilter";
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
    driverId?: IntFilter | undefined;
}
