"use strict";
var CompanyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CompanyWhereInput = CompanyWhereInput_1 = class CompanyWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CompanyWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CompanyWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CompanyWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CompanyWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], CompanyWhereInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], CompanyWhereInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CompanyWhereInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CompanyWhereInput.prototype, "zipCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "country", void 0);
CompanyWhereInput = CompanyWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyWhereInput", {
        isAbstract: true
    })
], CompanyWhereInput);
exports.CompanyWhereInput = CompanyWhereInput;
