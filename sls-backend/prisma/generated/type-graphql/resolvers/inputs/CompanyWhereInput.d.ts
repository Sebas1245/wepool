import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CompanyWhereInput {
    AND?: CompanyWhereInput[] | undefined;
    OR?: CompanyWhereInput[] | undefined;
    NOT?: CompanyWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    latitude?: FloatFilter | undefined;
    longitude?: FloatFilter | undefined;
    street?: StringFilter | undefined;
    number?: IntFilter | undefined;
    zipCode?: IntFilter | undefined;
    city?: StringFilter | undefined;
    state?: StringFilter | undefined;
    country?: StringFilter | undefined;
}
