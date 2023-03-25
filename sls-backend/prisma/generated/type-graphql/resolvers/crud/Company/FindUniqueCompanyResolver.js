"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCompanyArgs_1 = require("./args/FindUniqueCompanyArgs");
const Company_1 = require("../../../models/Company");
const helpers_1 = require("../../../helpers");
let FindUniqueCompanyResolver = class FindUniqueCompanyResolver {
    async company(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCompanyArgs_1.FindUniqueCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCompanyResolver.prototype, "company", null);
FindUniqueCompanyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], FindUniqueCompanyResolver);
exports.FindUniqueCompanyResolver = FindUniqueCompanyResolver;
