import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCompanyArgs } from "./args/UpdateOneCompanyArgs";
import { Company } from "../../../models/Company";
export declare class UpdateOneCompanyResolver {
    updateOneCompany(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCompanyArgs): Promise<Company | null>;
}
