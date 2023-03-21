"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyAvgOrderByAggregateInput_1 = require("../inputs/CompanyAvgOrderByAggregateInput");
const CompanyCountOrderByAggregateInput_1 = require("../inputs/CompanyCountOrderByAggregateInput");
const CompanyMaxOrderByAggregateInput_1 = require("../inputs/CompanyMaxOrderByAggregateInput");
const CompanyMinOrderByAggregateInput_1 = require("../inputs/CompanyMinOrderByAggregateInput");
const CompanySumOrderByAggregateInput_1 = require("../inputs/CompanySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CompanyOrderByWithAggregationInput = class CompanyOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "zipCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCountOrderByAggregateInput_1.CompanyCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCountOrderByAggregateInput_1.CompanyCountOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyAvgOrderByAggregateInput_1.CompanyAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyAvgOrderByAggregateInput_1.CompanyAvgOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyMaxOrderByAggregateInput_1.CompanyMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyMaxOrderByAggregateInput_1.CompanyMaxOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyMinOrderByAggregateInput_1.CompanyMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyMinOrderByAggregateInput_1.CompanyMinOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanySumOrderByAggregateInput_1.CompanySumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanySumOrderByAggregateInput_1.CompanySumOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_sum", void 0);
CompanyOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyOrderByWithAggregationInput", {
        isAbstract: true
    })
], CompanyOrderByWithAggregationInput);
exports.CompanyOrderByWithAggregationInput = CompanyOrderByWithAggregationInput;
