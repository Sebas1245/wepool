import { UserCreateManyCompanyInputEnvelope } from "../inputs/UserCreateManyCompanyInputEnvelope";
import { UserCreateOrConnectWithoutCompanyInput } from "../inputs/UserCreateOrConnectWithoutCompanyInput";
import { UserCreateWithoutCompanyInput } from "../inputs/UserCreateWithoutCompanyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutCompanyInput {
    create?: UserCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput[] | undefined;
    createMany?: UserCreateManyCompanyInputEnvelope | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
