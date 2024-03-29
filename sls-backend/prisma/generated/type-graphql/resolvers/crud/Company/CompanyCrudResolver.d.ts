import type { GraphQLResolveInfo } from "graphql";
import { AggregateCompanyArgs } from "./args/AggregateCompanyArgs";
import { CreateManyCompanyArgs } from "./args/CreateManyCompanyArgs";
import { CreateOneCompanyArgs } from "./args/CreateOneCompanyArgs";
import { DeleteManyCompanyArgs } from "./args/DeleteManyCompanyArgs";
import { DeleteOneCompanyArgs } from "./args/DeleteOneCompanyArgs";
import { FindFirstCompanyArgs } from "./args/FindFirstCompanyArgs";
import { FindFirstCompanyOrThrowArgs } from "./args/FindFirstCompanyOrThrowArgs";
import { FindManyCompanyArgs } from "./args/FindManyCompanyArgs";
import { FindUniqueCompanyArgs } from "./args/FindUniqueCompanyArgs";
import { FindUniqueCompanyOrThrowArgs } from "./args/FindUniqueCompanyOrThrowArgs";
import { GroupByCompanyArgs } from "./args/GroupByCompanyArgs";
import { UpdateManyCompanyArgs } from "./args/UpdateManyCompanyArgs";
import { UpdateOneCompanyArgs } from "./args/UpdateOneCompanyArgs";
import { UpsertOneCompanyArgs } from "./args/UpsertOneCompanyArgs";
import { Company } from "../../../models/Company";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCompany } from "../../outputs/AggregateCompany";
import { CompanyGroupBy } from "../../outputs/CompanyGroupBy";
export declare class CompanyCrudResolver {
    aggregateCompany(ctx: any, info: GraphQLResolveInfo, args: AggregateCompanyArgs): Promise<AggregateCompany>;
    createManyCompany(ctx: any, info: GraphQLResolveInfo, args: CreateManyCompanyArgs): Promise<AffectedRowsOutput>;
    createOneCompany(ctx: any, info: GraphQLResolveInfo, args: CreateOneCompanyArgs): Promise<Company>;
    deleteManyCompany(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCompanyArgs): Promise<AffectedRowsOutput>;
    deleteOneCompany(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCompanyArgs): Promise<Company | null>;
    findFirstCompany(ctx: any, info: GraphQLResolveInfo, args: FindFirstCompanyArgs): Promise<Company | null>;
    findFirstCompanyOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCompanyOrThrowArgs): Promise<Company | null>;
    companies(ctx: any, info: GraphQLResolveInfo, args: FindManyCompanyArgs): Promise<Company[]>;
    company(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCompanyArgs): Promise<Company | null>;
    getCompany(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCompanyOrThrowArgs): Promise<Company | null>;
    groupByCompany(ctx: any, info: GraphQLResolveInfo, args: GroupByCompanyArgs): Promise<CompanyGroupBy[]>;
    updateManyCompany(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCompanyArgs): Promise<AffectedRowsOutput>;
    updateOneCompany(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCompanyArgs): Promise<Company | null>;
    upsertOneCompany(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCompanyArgs): Promise<Company>;
}
