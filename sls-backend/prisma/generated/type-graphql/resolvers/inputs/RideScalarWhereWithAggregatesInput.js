"use strict";
var RideScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumRideStatusWithAggregatesFilter_1 = require("../inputs/EnumRideStatusWithAggregatesFilter");
const EnumStartingPointWithAggregatesFilter_1 = require("../inputs/EnumStartingPointWithAggregatesFilter");
const FloatWithAggregatesFilter_1 = require("../inputs/FloatWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
let RideScalarWhereWithAggregatesInput = RideScalarWhereWithAggregatesInput_1 = class RideScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], RideScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatWithAggregatesFilter_1.FloatWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatWithAggregatesFilter_1.FloatWithAggregatesFilter)
], RideScalarWhereWithAggregatesInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], RideScalarWhereWithAggregatesInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRideStatusWithAggregatesFilter_1.EnumRideStatusWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRideStatusWithAggregatesFilter_1.EnumRideStatusWithAggregatesFilter)
], RideScalarWhereWithAggregatesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStartingPointWithAggregatesFilter_1.EnumStartingPointWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStartingPointWithAggregatesFilter_1.EnumStartingPointWithAggregatesFilter)
], RideScalarWhereWithAggregatesInput.prototype, "startsAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], RideScalarWhereWithAggregatesInput.prototype, "driverId", void 0);
RideScalarWhereWithAggregatesInput = RideScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RideScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], RideScalarWhereWithAggregatesInput);
exports.RideScalarWhereWithAggregatesInput = RideScalarWhereWithAggregatesInput;
