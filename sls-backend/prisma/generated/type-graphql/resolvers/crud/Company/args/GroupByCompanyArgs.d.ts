import { CompanyOrderByWithAggregationInput } from "../../../inputs/CompanyOrderByWithAggregationInput";
import { CompanyScalarWhereWithAggregatesInput } from "../../../inputs/CompanyScalarWhereWithAggregatesInput";
import { CompanyWhereInput } from "../../../inputs/CompanyWhereInput";
export declare class GroupByCompanyArgs {
    where?: CompanyWhereInput | undefined;
    orderBy?: CompanyOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "latitude" | "longitude" | "street" | "number" | "zipCode" | "city" | "state" | "country">;
    having?: CompanyScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
