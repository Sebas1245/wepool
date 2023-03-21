"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCompanyArgs_1 = require("./args/AggregateCompanyArgs");
const CreateManyCompanyArgs_1 = require("./args/CreateManyCompanyArgs");
const CreateOneCompanyArgs_1 = require("./args/CreateOneCompanyArgs");
const DeleteManyCompanyArgs_1 = require("./args/DeleteManyCompanyArgs");
const DeleteOneCompanyArgs_1 = require("./args/DeleteOneCompanyArgs");
const FindFirstCompanyArgs_1 = require("./args/FindFirstCompanyArgs");
const FindFirstCompanyOrThrowArgs_1 = require("./args/FindFirstCompanyOrThrowArgs");
const FindManyCompanyArgs_1 = require("./args/FindManyCompanyArgs");
const FindUniqueCompanyArgs_1 = require("./args/FindUniqueCompanyArgs");
const FindUniqueCompanyOrThrowArgs_1 = require("./args/FindUniqueCompanyOrThrowArgs");
const GroupByCompanyArgs_1 = require("./args/GroupByCompanyArgs");
const UpdateManyCompanyArgs_1 = require("./args/UpdateManyCompanyArgs");
const UpdateOneCompanyArgs_1 = require("./args/UpdateOneCompanyArgs");
const UpsertOneCompanyArgs_1 = require("./args/UpsertOneCompanyArgs");
const helpers_1 = require("../../../helpers");
const Company_1 = require("../../../models/Company");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCompany_1 = require("../../outputs/AggregateCompany");
const CompanyGroupBy_1 = require("../../outputs/CompanyGroupBy");
let CompanyCrudResolver = class CompanyCrudResolver {
    async aggregateCompany(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).company.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCompanyOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async companies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async company(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCompany(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCompany_1.AggregateCompany, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCompanyArgs_1.AggregateCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "aggregateCompany", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCompanyArgs_1.CreateManyCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "createManyCompany", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Company_1.Company, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCompanyArgs_1.CreateOneCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "createOneCompany", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCompanyArgs_1.DeleteManyCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "deleteManyCompany", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Company_1.Company, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCompanyArgs_1.DeleteOneCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "deleteOneCompany", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Company_1.Company, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCompanyArgs_1.FindFirstCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "findFirstCompany", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Company_1.Company, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCompanyOrThrowArgs_1.FindFirstCompanyOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "findFirstCompanyOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Company_1.Company], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCompanyArgs_1.FindManyCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "companies", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Company_1.Company, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCompanyArgs_1.FindUniqueCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "company", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Company_1.Company, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCompanyOrThrowArgs_1.FindUniqueCompanyOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "getCompany", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CompanyGroupBy_1.CompanyGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCompanyArgs_1.GroupByCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "groupByCompany", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCompanyArgs_1.UpdateManyCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "updateManyCompany", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Company_1.Company, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCompanyArgs_1.UpdateOneCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "updateOneCompany", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Company_1.Company, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCompanyArgs_1.UpsertOneCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyCrudResolver.prototype, "upsertOneCompany", null);
CompanyCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], CompanyCrudResolver);
exports.CompanyCrudResolver = CompanyCrudResolver;
