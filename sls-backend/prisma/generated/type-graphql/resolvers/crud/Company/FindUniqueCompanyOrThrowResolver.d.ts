import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCompanyOrThrowArgs } from "./args/FindUniqueCompanyOrThrowArgs";
import { Company } from "../../../models/Company";
export declare class FindUniqueCompanyOrThrowResolver {
    getCompany(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCompanyOrThrowArgs): Promise<Company | null>;
}
