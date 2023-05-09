import { CarAvgAggregate } from "../outputs/CarAvgAggregate";
import { CarCountAggregate } from "../outputs/CarCountAggregate";
import { CarMaxAggregate } from "../outputs/CarMaxAggregate";
import { CarMinAggregate } from "../outputs/CarMinAggregate";
import { CarSumAggregate } from "../outputs/CarSumAggregate";
export declare class CarGroupBy {
    id: number;
    brand: string;
    model: string;
    year: number;
    plateNumber: string;
    capacity: number | null;
    color: string;
    driverId: number;
    _count: CarCountAggregate | null;
    _avg: CarAvgAggregate | null;
    _sum: CarSumAggregate | null;
    _min: CarMinAggregate | null;
    _max: CarMaxAggregate | null;
}
