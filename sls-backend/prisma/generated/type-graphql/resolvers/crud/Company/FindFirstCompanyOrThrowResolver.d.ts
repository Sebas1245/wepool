import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCompanyOrThrowArgs } from "./args/FindFirstCompanyOrThrowArgs";
import { Company } from "../../../models/Company";
export declare class FindFirstCompanyOrThrowResolver {
    findFirstCompanyOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCompanyOrThrowArgs): Promise<Company | null>;
}
