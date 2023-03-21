"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCompanyOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCompanyOrThrowArgs_1 = require("./args/FindUniqueCompanyOrThrowArgs");
const Company_1 = require("../../../models/Company");
const helpers_1 = require("../../../helpers");
let FindUniqueCompanyOrThrowResolver = class FindUniqueCompanyOrThrowResolver {
    async getCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindUniqueCompanyOrThrowResolver.prototype, "getCompany", null);
FindUniqueCompanyOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], FindUniqueCompanyOrThrowResolver);
exports.FindUniqueCompanyOrThrowResolver = FindUniqueCompanyOrThrowResolver;
