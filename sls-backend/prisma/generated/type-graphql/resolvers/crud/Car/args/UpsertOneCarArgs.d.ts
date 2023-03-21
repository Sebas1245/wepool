import { CarCreateInput } from "../../../inputs/CarCreateInput";
import { CarUpdateInput } from "../../../inputs/CarUpdateInput";
import { CarWhereUniqueInput } from "../../../inputs/CarWhereUniqueInput";
export declare class UpsertOneCarArgs {
    where: CarWhereUniqueInput;
    create: CarCreateInput;
    update: CarUpdateInput;
}
