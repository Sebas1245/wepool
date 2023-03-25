import { UserCreateOrConnectWithoutCarInput } from "../inputs/UserCreateOrConnectWithoutCarInput";
import { UserCreateWithoutCarInput } from "../inputs/UserCreateWithoutCarInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutCarInput {
    create?: UserCreateWithoutCarInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCarInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
