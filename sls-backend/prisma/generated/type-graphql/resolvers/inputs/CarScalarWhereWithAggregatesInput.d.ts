import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CarScalarWhereWithAggregatesInput {
    AND?: CarScalarWhereWithAggregatesInput[] | undefined;
    OR?: CarScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CarScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    brand?: StringWithAggregatesFilter | undefined;
    model?: StringWithAggregatesFilter | undefined;
    year?: IntWithAggregatesFilter | undefined;
    plateNumber?: StringWithAggregatesFilter | undefined;
    capacity?: IntWithAggregatesFilter | undefined;
    color?: StringWithAggregatesFilter | undefined;
    driverId?: IntWithAggregatesFilter | undefined;
}
