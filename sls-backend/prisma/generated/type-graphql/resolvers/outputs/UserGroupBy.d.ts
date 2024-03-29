import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
export declare class UserGroupBy {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    fname: string;
    lname: string;
    email: string;
    latitude: number | null;
    longitude: number | null;
    rating: number | null;
    street: string | null;
    number: number | null;
    zipCode: number | null;
    city: string | null;
    state: string | null;
    country: string | null;
    phoneNumber: string | null;
    carId: number | null;
    companyId: number;
    _count: UserCountAggregate | null;
    _avg: UserAvgAggregate | null;
    _sum: UserSumAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
