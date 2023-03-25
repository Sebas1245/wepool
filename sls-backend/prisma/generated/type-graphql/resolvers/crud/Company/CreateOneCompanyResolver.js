"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCompanyArgs_1 = require("./args/CreateOneCompanyArgs");
const Company_1 = require("../../../models/Company");
const helpers_1 = require("../../../helpers");
let CreateOneCompanyResolver = class CreateOneCompanyResolver {
    async createOneCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateOneCompanyResolver.prototype, "createOneCompany", null);
CreateOneCompanyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], CreateOneCompanyResolver);
exports.CreateOneCompanyResolver = CreateOneCompanyResolver;
