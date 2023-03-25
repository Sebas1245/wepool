import { RidePassengersAvgAggregate } from "../outputs/RidePassengersAvgAggregate";
import { RidePassengersCountAggregate } from "../outputs/RidePassengersCountAggregate";
import { RidePassengersMaxAggregate } from "../outputs/RidePassengersMaxAggregate";
import { RidePassengersMinAggregate } from "../outputs/RidePassengersMinAggregate";
import { RidePassengersSumAggregate } from "../outputs/RidePassengersSumAggregate";
export declare class AggregateRidePassengers {
    _count: RidePassengersCountAggregate | null;
    _avg: RidePassengersAvgAggregate | null;
    _sum: RidePassengersSumAggregate | null;
    _min: RidePassengersMinAggregate | null;
    _max: RidePassengersMaxAggregate | null;
}
