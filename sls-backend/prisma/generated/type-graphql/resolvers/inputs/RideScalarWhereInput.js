"use strict";
var RideScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumRideStatusFilter_1 = require("../inputs/EnumRideStatusFilter");
const EnumStartingPointFilter_1 = require("../inputs/EnumStartingPointFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
let RideScalarWhereInput = RideScalarWhereInput_1 = class RideScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RideScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], RideScalarWhereInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RideScalarWhereInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRideStatusFilter_1.EnumRideStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRideStatusFilter_1.EnumRideStatusFilter)
], RideScalarWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStartingPointFilter_1.EnumStartingPointFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStartingPointFilter_1.EnumStartingPointFilter)
], RideScalarWhereInput.prototype, "startsAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RideScalarWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RideScalarWhereInput.prototype, "driverId", void 0);
RideScalarWhereInput = RideScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RideScalarWhereInput", {
        isAbstract: true
    })
], RideScalarWhereInput);
exports.RideScalarWhereInput = RideScalarWhereInput;
