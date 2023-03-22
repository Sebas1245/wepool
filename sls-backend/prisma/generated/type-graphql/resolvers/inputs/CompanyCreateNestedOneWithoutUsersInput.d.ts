import { CompanyCreateOrConnectWithoutUsersInput } from "../inputs/CompanyCreateOrConnectWithoutUsersInput";
import { CompanyCreateWithoutUsersInput } from "../inputs/CompanyCreateWithoutUsersInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyCreateNestedOneWithoutUsersInput {
    create?: CompanyCreateWithoutUsersInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
}
