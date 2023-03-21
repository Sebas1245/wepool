import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RideRelationFilter } from "../inputs/RideRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class RidePassengersWhereInput {
    AND?: RidePassengersWhereInput[] | undefined;
    OR?: RidePassengersWhereInput[] | undefined;
    NOT?: RidePassengersWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    passengerId?: IntFilter | undefined;
    rideId?: IntFilter | undefined;
    passenger?: UserRelationFilter | undefined;
    ride?: RideRelationFilter | undefined;
}
