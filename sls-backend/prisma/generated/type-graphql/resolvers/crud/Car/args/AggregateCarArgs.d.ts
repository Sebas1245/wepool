import { CarOrderByWithRelationInput } from "../../../inputs/CarOrderByWithRelationInput";
import { CarWhereInput } from "../../../inputs/CarWhereInput";
import { CarWhereUniqueInput } from "../../../inputs/CarWhereUniqueInput";
export declare class AggregateCarArgs {
    where?: CarWhereInput | undefined;
    orderBy?: CarOrderByWithRelationInput[] | undefined;
    cursor?: CarWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
