import { EnumRideStatusFilter } from "../inputs/EnumRideStatusFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RidePassengersListRelationFilter } from "../inputs/RidePassengersListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class RideWhereInput {
    AND?: RideWhereInput[] | undefined;
    OR?: RideWhereInput[] | undefined;
    NOT?: RideWhereInput[] | undefined;
    id?: IntFilter | undefined;
    kmToGoalLocation?: FloatFilter | undefined;
    availableSeats?: IntFilter | undefined;
    status?: EnumRideStatusFilter | undefined;
    driverId?: IntFilter | undefined;
    driver?: UserRelationFilter | undefined;
    passengers?: RidePassengersListRelationFilter | undefined;
}
