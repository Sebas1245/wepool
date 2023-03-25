"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCompanyOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCompanyOrThrowArgs_1 = require("./args/FindFirstCompanyOrThrowArgs");
const Company_1 = require("../../../models/Company");
const helpers_1 = require("../../../helpers");
let FindFirstCompanyOrThrowResolver = class FindFirstCompanyOrThrowResolver {
    async findFirstCompanyOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCompanyOrThrowArgs_1.FindFirstCompanyOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCompanyOrThrowResolver.prototype, "findFirstCompanyOrThrow", null);
FindFirstCompanyOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], FindFirstCompanyOrThrowResolver);
exports.FindFirstCompanyOrThrowResolver = FindFirstCompanyOrThrowResolver;
