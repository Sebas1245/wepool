import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCompanyArgs } from "./args/DeleteOneCompanyArgs";
import { Company } from "../../../models/Company";
export declare class DeleteOneCompanyResolver {
    deleteOneCompany(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCompanyArgs): Promise<Company | null>;
}
