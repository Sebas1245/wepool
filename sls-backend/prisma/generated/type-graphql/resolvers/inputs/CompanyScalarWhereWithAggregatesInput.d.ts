import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CompanyScalarWhereWithAggregatesInput {
    AND?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    OR?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CompanyScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    latitude?: FloatNullableWithAggregatesFilter | undefined;
    longitude?: FloatNullableWithAggregatesFilter | undefined;
    street?: StringWithAggregatesFilter | undefined;
    number?: IntWithAggregatesFilter | undefined;
    zipCode?: IntWithAggregatesFilter | undefined;
    city?: StringWithAggregatesFilter | undefined;
    state?: StringWithAggregatesFilter | undefined;
    country?: StringWithAggregatesFilter | undefined;
}
