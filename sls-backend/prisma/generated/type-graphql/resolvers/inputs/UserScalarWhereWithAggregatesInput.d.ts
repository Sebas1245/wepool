import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    fname?: StringWithAggregatesFilter | undefined;
    lname?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    latitude?: FloatNullableWithAggregatesFilter | undefined;
    longitude?: FloatNullableWithAggregatesFilter | undefined;
    street?: StringNullableWithAggregatesFilter | undefined;
    number?: IntNullableWithAggregatesFilter | undefined;
    zipCode?: IntNullableWithAggregatesFilter | undefined;
    city?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    phoneNumber?: StringNullableWithAggregatesFilter | undefined;
    carId?: IntNullableWithAggregatesFilter | undefined;
    companyId?: IntWithAggregatesFilter | undefined;
}
