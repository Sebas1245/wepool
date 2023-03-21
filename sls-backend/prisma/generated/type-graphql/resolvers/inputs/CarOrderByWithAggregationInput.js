"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarAvgOrderByAggregateInput_1 = require("../inputs/CarAvgOrderByAggregateInput");
const CarCountOrderByAggregateInput_1 = require("../inputs/CarCountOrderByAggregateInput");
const CarMaxOrderByAggregateInput_1 = require("../inputs/CarMaxOrderByAggregateInput");
const CarMinOrderByAggregateInput_1 = require("../inputs/CarMinOrderByAggregateInput");
const CarSumOrderByAggregateInput_1 = require("../inputs/CarSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CarOrderByWithAggregationInput = class CarOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarOrderByWithAggregationInput.prototype, "brand", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarOrderByWithAggregationInput.prototype, "model", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarOrderByWithAggregationInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarOrderByWithAggregationInput.prototype, "plateNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarOrderByWithAggregationInput.prototype, "capacity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarOrderByWithAggregationInput.prototype, "driverId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCountOrderByAggregateInput_1.CarCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCountOrderByAggregateInput_1.CarCountOrderByAggregateInput)
], CarOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarAvgOrderByAggregateInput_1.CarAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarAvgOrderByAggregateInput_1.CarAvgOrderByAggregateInput)
], CarOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarMaxOrderByAggregateInput_1.CarMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarMaxOrderByAggregateInput_1.CarMaxOrderByAggregateInput)
], CarOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarMinOrderByAggregateInput_1.CarMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarMinOrderByAggregateInput_1.CarMinOrderByAggregateInput)
], CarOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarSumOrderByAggregateInput_1.CarSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarSumOrderByAggregateInput_1.CarSumOrderByAggregateInput)
], CarOrderByWithAggregationInput.prototype, "_sum", void 0);
CarOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CarOrderByWithAggregationInput", {
        isAbstract: true
    })
], CarOrderByWithAggregationInput);
exports.CarOrderByWithAggregationInput = CarOrderByWithAggregationInput;
