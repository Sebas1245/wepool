"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyOrderByWithRelationInput_1 = require("../../../inputs/CompanyOrderByWithRelationInput");
const CompanyWhereInput_1 = require("../../../inputs/CompanyWhereInput");
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
const CompanyScalarFieldEnum_1 = require("../../../../enums/CompanyScalarFieldEnum");
let FindManyCompanyArgs = class FindManyCompanyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereInput_1.CompanyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyWhereInput_1.CompanyWhereInput)
], FindManyCompanyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCompanyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], FindManyCompanyArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCompanyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCompanyArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CompanyScalarFieldEnum_1.CompanyScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCompanyArgs.prototype, "distinct", void 0);
FindManyCompanyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCompanyArgs);
exports.FindManyCompanyArgs = FindManyCompanyArgs;
