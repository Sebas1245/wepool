"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyCompanyArgs_1 = require("./args/DeleteManyCompanyArgs");
const Company_1 = require("../../../models/Company");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCompanyResolver = class DeleteManyCompanyResolver {
    async deleteManyCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteManyCompanyResolver.prototype, "deleteManyCompany", null);
DeleteManyCompanyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], DeleteManyCompanyResolver);
exports.DeleteManyCompanyResolver = DeleteManyCompanyResolver;
