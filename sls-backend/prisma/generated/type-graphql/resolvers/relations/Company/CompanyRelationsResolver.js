"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Company_1 = require("../../../models/Company");
const User_1 = require("../../../models/User");
const CompanyUsersArgs_1 = require("./args/CompanyUsersArgs");
const helpers_1 = require("../../../helpers");
let CompanyRelationsResolver = class CompanyRelationsResolver {
    async users(company, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUniqueOrThrow({
            where: {
                id: company.id,
            },
        }).users({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Company_1.Company, Object, Object, CompanyUsersArgs_1.CompanyUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyRelationsResolver.prototype, "users", null);
CompanyRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], CompanyRelationsResolver);
exports.CompanyRelationsResolver = CompanyRelationsResolver;
