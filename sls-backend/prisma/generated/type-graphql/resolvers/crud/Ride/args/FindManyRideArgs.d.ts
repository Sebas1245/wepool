import { RideOrderByWithRelationInput } from "../../../inputs/RideOrderByWithRelationInput";
import { RideWhereInput } from "../../../inputs/RideWhereInput";
import { RideWhereUniqueInput } from "../../../inputs/RideWhereUniqueInput";
export declare class FindManyRideArgs {
    where?: RideWhereInput | undefined;
    orderBy?: RideOrderByWithRelationInput[] | undefined;
    cursor?: RideWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "kmToGoalLocation" | "availableSeats" | "status" | "startsAt" | "driverId"> | undefined;
}
