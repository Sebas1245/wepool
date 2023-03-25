"use strict";
var RidePassengersWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const RideRelationFilter_1 = require("../inputs/RideRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let RidePassengersWhereInput = RidePassengersWhereInput_1 = class RidePassengersWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RidePassengersWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RidePassengersWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RidePassengersWhereInput.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RidePassengersWhereInput.prototype, "rideId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], RidePassengersWhereInput.prototype, "passenger", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideRelationFilter_1.RideRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideRelationFilter_1.RideRelationFilter)
], RidePassengersWhereInput.prototype, "ride", void 0);
RidePassengersWhereInput = RidePassengersWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersWhereInput", {
        isAbstract: true
    })
], RidePassengersWhereInput);
exports.RidePassengersWhereInput = RidePassengersWhereInput;
