import { CarCreateOrConnectWithoutDriverInput } from "../inputs/CarCreateOrConnectWithoutDriverInput";
import { CarCreateWithoutDriverInput } from "../inputs/CarCreateWithoutDriverInput";
import { CarUpdateWithoutDriverInput } from "../inputs/CarUpdateWithoutDriverInput";
import { CarUpsertWithoutDriverInput } from "../inputs/CarUpsertWithoutDriverInput";
import { CarWhereUniqueInput } from "../inputs/CarWhereUniqueInput";
export declare class CarUpdateOneWithoutDriverNestedInput {
    create?: CarCreateWithoutDriverInput | undefined;
    connectOrCreate?: CarCreateOrConnectWithoutDriverInput | undefined;
    upsert?: CarUpsertWithoutDriverInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: CarWhereUniqueInput | undefined;
    update?: CarUpdateWithoutDriverInput | undefined;
}
