"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCreateWithoutPassengersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutDriverRidesInput_1 = require("../inputs/UserCreateNestedOneWithoutDriverRidesInput");
const RideStatus_1 = require("../../enums/RideStatus");
const StartingPoint_1 = require("../../enums/StartingPoint");
let RideCreateWithoutPassengersInput = class RideCreateWithoutPassengersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCreateWithoutPassengersInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCreateWithoutPassengersInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RideCreateWithoutPassengersInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StartingPoint_1.StartingPoint, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RideCreateWithoutPassengersInput.prototype, "startsAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDriverRidesInput_1.UserCreateNestedOneWithoutDriverRidesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutDriverRidesInput_1.UserCreateNestedOneWithoutDriverRidesInput)
], RideCreateWithoutPassengersInput.prototype, "driver", void 0);
RideCreateWithoutPassengersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideCreateWithoutPassengersInput", {
        isAbstract: true
    })
], RideCreateWithoutPassengersInput);
exports.RideCreateWithoutPassengersInput = RideCreateWithoutPassengersInput;
