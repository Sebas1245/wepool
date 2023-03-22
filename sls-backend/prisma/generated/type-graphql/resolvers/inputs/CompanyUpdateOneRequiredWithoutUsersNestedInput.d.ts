import { CompanyCreateOrConnectWithoutUsersInput } from "../inputs/CompanyCreateOrConnectWithoutUsersInput";
import { CompanyCreateWithoutUsersInput } from "../inputs/CompanyCreateWithoutUsersInput";
import { CompanyUpdateWithoutUsersInput } from "../inputs/CompanyUpdateWithoutUsersInput";
import { CompanyUpsertWithoutUsersInput } from "../inputs/CompanyUpsertWithoutUsersInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyUpdateOneRequiredWithoutUsersNestedInput {
    create?: CompanyCreateWithoutUsersInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput | undefined;
    upsert?: CompanyUpsertWithoutUsersInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
    update?: CompanyUpdateWithoutUsersInput | undefined;
}
