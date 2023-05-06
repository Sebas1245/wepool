"use strict";
var RideWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumRideStatusFilter_1 = require("../inputs/EnumRideStatusFilter");
const EnumStartingPointFilter_1 = require("../inputs/EnumStartingPointFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const RidePassengersListRelationFilter_1 = require("../inputs/RidePassengersListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let RideWhereInput = RideWhereInput_1 = class RideWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RideWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], RideWhereInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RideWhereInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRideStatusFilter_1.EnumRideStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRideStatusFilter_1.EnumRideStatusFilter)
], RideWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStartingPointFilter_1.EnumStartingPointFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStartingPointFilter_1.EnumStartingPointFilter)
], RideWhereInput.prototype, "startsAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RideWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RideWhereInput.prototype, "driverId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], RideWhereInput.prototype, "driver", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersListRelationFilter_1.RidePassengersListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersListRelationFilter_1.RidePassengersListRelationFilter)
], RideWhereInput.prototype, "passengers", void 0);
RideWhereInput = RideWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RideWhereInput", {
        isAbstract: true
    })
], RideWhereInput);
exports.RideWhereInput = RideWhereInput;
