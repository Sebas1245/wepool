import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCompanyArgs } from "./args/UpsertOneCompanyArgs";
import { Company } from "../../../models/Company";
export declare class UpsertOneCompanyResolver {
    upsertOneCompany(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCompanyArgs): Promise<Company>;
}
