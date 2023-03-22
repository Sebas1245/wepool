import { UserAvgOrderByAggregateInput } from "../inputs/UserAvgOrderByAggregateInput";
import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
import { UserSumOrderByAggregateInput } from "../inputs/UserSumOrderByAggregateInput";
export declare class UserOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    fname?: "asc" | "desc" | undefined;
    lname?: "asc" | "desc" | undefined;
    latitude?: "asc" | "desc" | undefined;
    longitude?: "asc" | "desc" | undefined;
    street?: "asc" | "desc" | undefined;
    number?: "asc" | "desc" | undefined;
    zipCode?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    carId?: "asc" | "desc" | undefined;
    companyId?: "asc" | "desc" | undefined;
    _count?: UserCountOrderByAggregateInput | undefined;
    _avg?: UserAvgOrderByAggregateInput | undefined;
    _max?: UserMaxOrderByAggregateInput | undefined;
    _min?: UserMinOrderByAggregateInput | undefined;
    _sum?: UserSumOrderByAggregateInput | undefined;
}
