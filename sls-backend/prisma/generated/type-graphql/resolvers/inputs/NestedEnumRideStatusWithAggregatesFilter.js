"use strict";
var NestedEnumRideStatusWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRideStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRideStatusFilter_1 = require("../inputs/NestedEnumRideStatusFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const RideStatus_1 = require("../../enums/RideStatus");
let NestedEnumRideStatusWithAggregatesFilter = NestedEnumRideStatusWithAggregatesFilter_1 = class NestedEnumRideStatusWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumRideStatusWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideStatus_1.RideStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRideStatusWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideStatus_1.RideStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRideStatusWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRideStatusWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRideStatusWithAggregatesFilter)
], NestedEnumRideStatusWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumRideStatusWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRideStatusFilter_1.NestedEnumRideStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRideStatusFilter_1.NestedEnumRideStatusFilter)
], NestedEnumRideStatusWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRideStatusFilter_1.NestedEnumRideStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRideStatusFilter_1.NestedEnumRideStatusFilter)
], NestedEnumRideStatusWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumRideStatusWithAggregatesFilter = NestedEnumRideStatusWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumRideStatusWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumRideStatusWithAggregatesFilter);
exports.NestedEnumRideStatusWithAggregatesFilter = NestedEnumRideStatusWithAggregatesFilter;
