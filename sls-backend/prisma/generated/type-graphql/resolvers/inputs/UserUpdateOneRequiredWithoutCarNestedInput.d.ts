import { UserCreateOrConnectWithoutCarInput } from "../inputs/UserCreateOrConnectWithoutCarInput";
import { UserCreateWithoutCarInput } from "../inputs/UserCreateWithoutCarInput";
import { UserUpdateWithoutCarInput } from "../inputs/UserUpdateWithoutCarInput";
import { UserUpsertWithoutCarInput } from "../inputs/UserUpsertWithoutCarInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutCarNestedInput {
    create?: UserCreateWithoutCarInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCarInput | undefined;
    upsert?: UserUpsertWithoutCarInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutCarInput | undefined;
}
