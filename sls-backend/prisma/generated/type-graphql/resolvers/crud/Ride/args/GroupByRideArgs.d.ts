import { RideOrderByWithAggregationInput } from "../../../inputs/RideOrderByWithAggregationInput";
import { RideScalarWhereWithAggregatesInput } from "../../../inputs/RideScalarWhereWithAggregatesInput";
import { RideWhereInput } from "../../../inputs/RideWhereInput";
export declare class GroupByRideArgs {
    where?: RideWhereInput | undefined;
    orderBy?: RideOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "kmToGoalLocation" | "availableSeats" | "status" | "startsAt" | "driverId">;
    having?: RideScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
