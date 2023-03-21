import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class CarWhereInput {
    AND?: CarWhereInput[] | undefined;
    OR?: CarWhereInput[] | undefined;
    NOT?: CarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    brand?: StringFilter | undefined;
    model?: StringFilter | undefined;
    year?: IntFilter | undefined;
    plateNumber?: StringFilter | undefined;
    capacity?: IntFilter | undefined;
    driverId?: IntFilter | undefined;
    driver?: UserRelationFilter | undefined;
}
