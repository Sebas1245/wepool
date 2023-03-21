"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateWithoutRideInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutPassengerRidesInput_1 = require("../inputs/UserCreateNestedOneWithoutPassengerRidesInput");
let RidePassengersCreateWithoutRideInput = class RidePassengersCreateWithoutRideInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RidePassengersCreateWithoutRideInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPassengerRidesInput_1.UserCreateNestedOneWithoutPassengerRidesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPassengerRidesInput_1.UserCreateNestedOneWithoutPassengerRidesInput)
], RidePassengersCreateWithoutRideInput.prototype, "passenger", void 0);
RidePassengersCreateWithoutRideInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateWithoutRideInput", {
        isAbstract: true
    })
], RidePassengersCreateWithoutRideInput);
exports.RidePassengersCreateWithoutRideInput = RidePassengersCreateWithoutRideInput;
