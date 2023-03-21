import { UserCreateOrConnectWithoutPassengerRidesInput } from "../inputs/UserCreateOrConnectWithoutPassengerRidesInput";
import { UserCreateWithoutPassengerRidesInput } from "../inputs/UserCreateWithoutPassengerRidesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutPassengerRidesInput {
    create?: UserCreateWithoutPassengerRidesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPassengerRidesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
