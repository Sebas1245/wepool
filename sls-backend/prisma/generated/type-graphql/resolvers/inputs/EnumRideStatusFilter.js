"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRideStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRideStatusFilter_1 = require("../inputs/NestedEnumRideStatusFilter");
const RideStatus_1 = require("../../enums/RideStatus");
let EnumRideStatusFilter = class EnumRideStatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumRideStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideStatus_1.RideStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRideStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideStatus_1.RideStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRideStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRideStatusFilter_1.NestedEnumRideStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRideStatusFilter_1.NestedEnumRideStatusFilter)
], EnumRideStatusFilter.prototype, "not", void 0);
EnumRideStatusFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumRideStatusFilter", {
        isAbstract: true
    })
], EnumRideStatusFilter);
exports.EnumRideStatusFilter = EnumRideStatusFilter;
