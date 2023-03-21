"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateInput_1 = require("../../../inputs/CompanyCreateInput");
const CompanyUpdateInput_1 = require("../../../inputs/CompanyUpdateInput");
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
let UpsertOneCompanyArgs = class UpsertOneCompanyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], UpsertOneCompanyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateInput_1.CompanyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateInput_1.CompanyCreateInput)
], UpsertOneCompanyArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateInput_1.CompanyUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyUpdateInput_1.CompanyUpdateInput)
], UpsertOneCompanyArgs.prototype, "update", void 0);
UpsertOneCompanyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCompanyArgs);
exports.UpsertOneCompanyArgs = UpsertOneCompanyArgs;
