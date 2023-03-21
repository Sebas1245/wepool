import { RidePassengersOrderByWithAggregationInput } from "../../../inputs/RidePassengersOrderByWithAggregationInput";
import { RidePassengersScalarWhereWithAggregatesInput } from "../../../inputs/RidePassengersScalarWhereWithAggregatesInput";
import { RidePassengersWhereInput } from "../../../inputs/RidePassengersWhereInput";
export declare class GroupByRidePassengersArgs {
    where?: RidePassengersWhereInput | undefined;
    orderBy?: RidePassengersOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "passengerId" | "rideId">;
    having?: RidePassengersScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
