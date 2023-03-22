import { UserCreateManyCompanyInputEnvelope } from "../inputs/UserCreateManyCompanyInputEnvelope";
import { UserCreateOrConnectWithoutCompanyInput } from "../inputs/UserCreateOrConnectWithoutCompanyInput";
import { UserCreateWithoutCompanyInput } from "../inputs/UserCreateWithoutCompanyInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutCompanyInput } from "../inputs/UserUpdateManyWithWhereWithoutCompanyInput";
import { UserUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/UserUpdateWithWhereUniqueWithoutCompanyInput";
import { UserUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/UserUpsertWithWhereUniqueWithoutCompanyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutCompanyNestedInput {
    create?: UserCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;
    createMany?: UserCreateManyCompanyInputEnvelope | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
