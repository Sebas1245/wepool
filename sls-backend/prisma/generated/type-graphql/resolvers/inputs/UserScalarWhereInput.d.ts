import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserScalarWhereInput {
    AND?: UserScalarWhereInput[] | undefined;
    OR?: UserScalarWhereInput[] | undefined;
    NOT?: UserScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    fname?: StringFilter | undefined;
    lname?: StringFilter | undefined;
    email?: StringFilter | undefined;
    latitude?: FloatNullableFilter | undefined;
    longitude?: FloatNullableFilter | undefined;
    street?: StringNullableFilter | undefined;
    number?: IntNullableFilter | undefined;
    zipCode?: IntNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    phoneNumber?: StringNullableFilter | undefined;
    carId?: IntNullableFilter | undefined;
    companyId?: IntFilter | undefined;
}
