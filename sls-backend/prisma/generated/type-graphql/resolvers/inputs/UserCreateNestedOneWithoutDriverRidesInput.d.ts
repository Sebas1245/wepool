import { UserCreateOrConnectWithoutDriverRidesInput } from "../inputs/UserCreateOrConnectWithoutDriverRidesInput";
import { UserCreateWithoutDriverRidesInput } from "../inputs/UserCreateWithoutDriverRidesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutDriverRidesInput {
    create?: UserCreateWithoutDriverRidesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutDriverRidesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
