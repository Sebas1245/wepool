import { UserCreateOrConnectWithoutDriverRidesInput } from "../inputs/UserCreateOrConnectWithoutDriverRidesInput";
import { UserCreateWithoutDriverRidesInput } from "../inputs/UserCreateWithoutDriverRidesInput";
import { UserUpdateWithoutDriverRidesInput } from "../inputs/UserUpdateWithoutDriverRidesInput";
import { UserUpsertWithoutDriverRidesInput } from "../inputs/UserUpsertWithoutDriverRidesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutDriverRidesNestedInput {
    create?: UserCreateWithoutDriverRidesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutDriverRidesInput | undefined;
    upsert?: UserUpsertWithoutDriverRidesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutDriverRidesInput | undefined;
}
