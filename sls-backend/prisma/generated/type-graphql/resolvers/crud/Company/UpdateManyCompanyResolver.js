"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCompanyArgs_1 = require("./args/UpdateManyCompanyArgs");
const Company_1 = require("../../../models/Company");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCompanyResolver = class UpdateManyCompanyResolver {
    async updateManyCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCompanyArgs_1.UpdateManyCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCompanyResolver.prototype, "updateManyCompany", null);
UpdateManyCompanyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], UpdateManyCompanyResolver);
exports.UpdateManyCompanyResolver = UpdateManyCompanyResolver;
