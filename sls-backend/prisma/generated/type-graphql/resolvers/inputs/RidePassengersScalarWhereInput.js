"use strict";
var RidePassengersScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
let RidePassengersScalarWhereInput = RidePassengersScalarWhereInput_1 = class RidePassengersScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RidePassengersScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RidePassengersScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RidePassengersScalarWhereInput.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RidePassengersScalarWhereInput.prototype, "rideId", void 0);
RidePassengersScalarWhereInput = RidePassengersScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersScalarWhereInput", {
        isAbstract: true
    })
], RidePassengersScalarWhereInput);
exports.RidePassengersScalarWhereInput = RidePassengersScalarWhereInput;
