import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCompanyArgs } from "./args/CreateOneCompanyArgs";
import { Company } from "../../../models/Company";
export declare class CreateOneCompanyResolver {
    createOneCompany(ctx: any, info: GraphQLResolveInfo, args: CreateOneCompanyArgs): Promise<Company>;
}
