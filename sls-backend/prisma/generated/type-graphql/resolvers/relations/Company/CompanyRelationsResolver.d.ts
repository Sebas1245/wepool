import type { GraphQLResolveInfo } from "graphql";
import { Company } from "../../../models/Company";
import { User } from "../../../models/User";
import { CompanyUsersArgs } from "./args/CompanyUsersArgs";
export declare class CompanyRelationsResolver {
    users(company: Company, ctx: any, info: GraphQLResolveInfo, args: CompanyUsersArgs): Promise<User[]>;
}
