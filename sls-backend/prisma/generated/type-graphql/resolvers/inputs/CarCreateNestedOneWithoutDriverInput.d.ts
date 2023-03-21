import { CarCreateOrConnectWithoutDriverInput } from "../inputs/CarCreateOrConnectWithoutDriverInput";
import { CarCreateWithoutDriverInput } from "../inputs/CarCreateWithoutDriverInput";
import { CarWhereUniqueInput } from "../inputs/CarWhereUniqueInput";
export declare class CarCreateNestedOneWithoutDriverInput {
    create?: CarCreateWithoutDriverInput | undefined;
    connectOrCreate?: CarCreateOrConnectWithoutDriverInput | undefined;
    connect?: CarWhereUniqueInput | undefined;
}
