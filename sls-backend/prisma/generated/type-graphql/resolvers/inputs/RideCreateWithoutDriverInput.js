"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCreateWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateNestedManyWithoutRideInput_1 = require("../inputs/RidePassengersCreateNestedManyWithoutRideInput");
const RideStatus_1 = require("../../enums/RideStatus");
const StartingPoint_1 = require("../../enums/StartingPoint");
let RideCreateWithoutDriverInput = class RideCreateWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCreateWithoutDriverInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCreateWithoutDriverInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RideCreateWithoutDriverInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StartingPoint_1.StartingPoint, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RideCreateWithoutDriverInput.prototype, "startsAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RideCreateWithoutDriverInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateNestedManyWithoutRideInput_1.RidePassengersCreateNestedManyWithoutRideInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateNestedManyWithoutRideInput_1.RidePassengersCreateNestedManyWithoutRideInput)
], RideCreateWithoutDriverInput.prototype, "passengers", void 0);
RideCreateWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideCreateWithoutDriverInput", {
        isAbstract: true
    })
], RideCreateWithoutDriverInput);
exports.RideCreateWithoutDriverInput = RideCreateWithoutDriverInput;
