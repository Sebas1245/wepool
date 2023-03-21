"use strict";
var NestedEnumRideStatusFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRideStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideStatus_1 = require("../../enums/RideStatus");
let NestedEnumRideStatusFilter = NestedEnumRideStatusFilter_1 = class NestedEnumRideStatusFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumRideStatusFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideStatus_1.RideStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRideStatusFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideStatus_1.RideStatus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRideStatusFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRideStatusFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRideStatusFilter)
], NestedEnumRideStatusFilter.prototype, "not", void 0);
NestedEnumRideStatusFilter = NestedEnumRideStatusFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumRideStatusFilter", {
        isAbstract: true
    })
], NestedEnumRideStatusFilter);
exports.NestedEnumRideStatusFilter = NestedEnumRideStatusFilter;
