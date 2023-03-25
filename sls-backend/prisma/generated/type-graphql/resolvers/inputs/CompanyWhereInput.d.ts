import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class CompanyWhereInput {
    AND?: CompanyWhereInput[] | undefined;
    OR?: CompanyWhereInput[] | undefined;
    NOT?: CompanyWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    latitude?: FloatNullableFilter | undefined;
    longitude?: FloatNullableFilter | undefined;
    street?: StringFilter | undefined;
    number?: IntFilter | undefined;
    zipCode?: IntFilter | undefined;
    city?: StringFilter | undefined;
    state?: StringFilter | undefined;
    country?: StringFilter | undefined;
    users?: UserListRelationFilter | undefined;
}
