import { CarOrderByWithRelationInput } from "../../../inputs/CarOrderByWithRelationInput";
import { CarWhereInput } from "../../../inputs/CarWhereInput";
import { CarWhereUniqueInput } from "../../../inputs/CarWhereUniqueInput";
export declare class FindFirstCarOrThrowArgs {
    where?: CarWhereInput | undefined;
    orderBy?: CarOrderByWithRelationInput[] | undefined;
    cursor?: CarWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "brand" | "model" | "year" | "plateNumber" | "capacity" | "driverId"> | undefined;
}
