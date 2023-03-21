import { RidePassengersOrderByWithRelationInput } from "../../../inputs/RidePassengersOrderByWithRelationInput";
import { RidePassengersWhereInput } from "../../../inputs/RidePassengersWhereInput";
import { RidePassengersWhereUniqueInput } from "../../../inputs/RidePassengersWhereUniqueInput";
export declare class AggregateRidePassengersArgs {
    where?: RidePassengersWhereInput | undefined;
    orderBy?: RidePassengersOrderByWithRelationInput[] | undefined;
    cursor?: RidePassengersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
