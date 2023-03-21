import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
export declare class RidePassengersScalarWhereInput {
    AND?: RidePassengersScalarWhereInput[] | undefined;
    OR?: RidePassengersScalarWhereInput[] | undefined;
    NOT?: RidePassengersScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    passengerId?: IntFilter | undefined;
    rideId?: IntFilter | undefined;
}
