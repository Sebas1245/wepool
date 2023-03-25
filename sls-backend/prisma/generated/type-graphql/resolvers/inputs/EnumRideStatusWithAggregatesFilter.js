"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRideStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRideStatusFilter_1 = require("../inputs/NestedEnumRideStatusFilter");
const NestedEnumRideStatusWithAggregatesFilter_1 = require("../inputs/NestedEnumRideStatusWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const RideStatus_1 = require("../../enums/RideStatus");
let EnumRideStatusWithAggregatesFilter = class EnumRideStatusWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumRideStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideStatus_1.RideStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRideStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideStatus_1.RideStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRideStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRideStatusWithAggregatesFilter_1.NestedEnumRideStatusWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRideStatusWithAggregatesFilter_1.NestedEnumRideStatusWithAggregatesFilter)
], EnumRideStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumRideStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRideStatusFilter_1.NestedEnumRideStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRideStatusFilter_1.NestedEnumRideStatusFilter)
], EnumRideStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRideStatusFilter_1.NestedEnumRideStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRideStatusFilter_1.NestedEnumRideStatusFilter)
], EnumRideStatusWithAggregatesFilter.prototype, "_max", void 0);
EnumRideStatusWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumRideStatusWithAggregatesFilter", {
        isAbstract: true
    })
], EnumRideStatusWithAggregatesFilter);
exports.EnumRideStatusWithAggregatesFilter = EnumRideStatusWithAggregatesFilter;
