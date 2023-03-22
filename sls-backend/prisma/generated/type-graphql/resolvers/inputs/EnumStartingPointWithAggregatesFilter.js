"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumStartingPointWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumStartingPointFilter_1 = require("../inputs/NestedEnumStartingPointFilter");
const NestedEnumStartingPointWithAggregatesFilter_1 = require("../inputs/NestedEnumStartingPointWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const StartingPoint_1 = require("../../enums/StartingPoint");
let EnumStartingPointWithAggregatesFilter = class EnumStartingPointWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StartingPoint_1.StartingPoint, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumStartingPointWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StartingPoint_1.StartingPoint], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumStartingPointWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StartingPoint_1.StartingPoint], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumStartingPointWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStartingPointWithAggregatesFilter_1.NestedEnumStartingPointWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStartingPointWithAggregatesFilter_1.NestedEnumStartingPointWithAggregatesFilter)
], EnumStartingPointWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumStartingPointWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStartingPointFilter_1.NestedEnumStartingPointFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStartingPointFilter_1.NestedEnumStartingPointFilter)
], EnumStartingPointWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStartingPointFilter_1.NestedEnumStartingPointFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStartingPointFilter_1.NestedEnumStartingPointFilter)
], EnumStartingPointWithAggregatesFilter.prototype, "_max", void 0);
EnumStartingPointWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumStartingPointWithAggregatesFilter", {
        isAbstract: true
    })
], EnumStartingPointWithAggregatesFilter);
exports.EnumStartingPointWithAggregatesFilter = EnumStartingPointWithAggregatesFilter;
