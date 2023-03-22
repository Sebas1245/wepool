import { RideAvgAggregate } from "../outputs/RideAvgAggregate";
import { RideCountAggregate } from "../outputs/RideCountAggregate";
import { RideMaxAggregate } from "../outputs/RideMaxAggregate";
import { RideMinAggregate } from "../outputs/RideMinAggregate";
import { RideSumAggregate } from "../outputs/RideSumAggregate";
export declare class RideGroupBy {
    id: number;
    kmToGoalLocation: number;
    availableSeats: number;
    status: "OPEN" | "CLOSED";
    startsAt: "DRIVER" | "COMPANY";
    driverId: number;
    _count: RideCountAggregate | null;
    _avg: RideAvgAggregate | null;
    _sum: RideSumAggregate | null;
    _min: RideMinAggregate | null;
    _max: RideMaxAggregate | null;
}
