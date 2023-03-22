"use strict";
var NestedEnumStartingPointWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumStartingPointWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumStartingPointFilter_1 = require("../inputs/NestedEnumStartingPointFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const StartingPoint_1 = require("../../enums/StartingPoint");
let NestedEnumStartingPointWithAggregatesFilter = NestedEnumStartingPointWithAggregatesFilter_1 = class NestedEnumStartingPointWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StartingPoint_1.StartingPoint, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumStartingPointWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StartingPoint_1.StartingPoint], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumStartingPointWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StartingPoint_1.StartingPoint], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumStartingPointWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStartingPointWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStartingPointWithAggregatesFilter)
], NestedEnumStartingPointWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumStartingPointWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStartingPointFilter_1.NestedEnumStartingPointFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStartingPointFilter_1.NestedEnumStartingPointFilter)
], NestedEnumStartingPointWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStartingPointFilter_1.NestedEnumStartingPointFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStartingPointFilter_1.NestedEnumStartingPointFilter)
], NestedEnumStartingPointWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumStartingPointWithAggregatesFilter = NestedEnumStartingPointWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumStartingPointWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumStartingPointWithAggregatesFilter);
exports.NestedEnumStartingPointWithAggregatesFilter = NestedEnumStartingPointWithAggregatesFilter;
