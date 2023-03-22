import { UserCreateNestedManyWithoutCompanyInput } from "../inputs/UserCreateNestedManyWithoutCompanyInput";
export declare class CompanyCreateInput {
    name: string;
    latitude?: number | undefined;
    longitude?: number | undefined;
    street: string;
    number: number;
    zipCode: number;
    city: string;
    state: string;
    country: string;
    users?: UserCreateNestedManyWithoutCompanyInput | undefined;
}
