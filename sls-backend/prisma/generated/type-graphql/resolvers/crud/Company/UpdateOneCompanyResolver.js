"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneCompanyArgs_1 = require("./args/UpdateOneCompanyArgs");
const Company_1 = require("../../../models/Company");
const helpers_1 = require("../../../helpers");
let UpdateOneCompanyResolver = class UpdateOneCompanyResolver {
    async updateOneCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateOneCompanyResolver.prototype, "updateOneCompany", null);
UpdateOneCompanyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], UpdateOneCompanyResolver);
exports.UpdateOneCompanyResolver = UpdateOneCompanyResolver;
