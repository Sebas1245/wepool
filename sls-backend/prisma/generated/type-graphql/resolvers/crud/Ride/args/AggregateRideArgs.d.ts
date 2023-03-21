import { RideOrderByWithRelationInput } from "../../../inputs/RideOrderByWithRelationInput";
import { RideWhereInput } from "../../../inputs/RideWhereInput";
import { RideWhereUniqueInput } from "../../../inputs/RideWhereUniqueInput";
export declare class AggregateRideArgs {
    where?: RideWhereInput | undefined;
    orderBy?: RideOrderByWithRelationInput[] | undefined;
    cursor?: RideWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
