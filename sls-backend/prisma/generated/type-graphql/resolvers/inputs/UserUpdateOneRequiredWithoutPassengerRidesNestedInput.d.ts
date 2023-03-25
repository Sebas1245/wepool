import { UserCreateOrConnectWithoutPassengerRidesInput } from "../inputs/UserCreateOrConnectWithoutPassengerRidesInput";
import { UserCreateWithoutPassengerRidesInput } from "../inputs/UserCreateWithoutPassengerRidesInput";
import { UserUpdateWithoutPassengerRidesInput } from "../inputs/UserUpdateWithoutPassengerRidesInput";
import { UserUpsertWithoutPassengerRidesInput } from "../inputs/UserUpsertWithoutPassengerRidesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutPassengerRidesNestedInput {
    create?: UserCreateWithoutPassengerRidesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPassengerRidesInput | undefined;
    upsert?: UserUpsertWithoutPassengerRidesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutPassengerRidesInput | undefined;
}
