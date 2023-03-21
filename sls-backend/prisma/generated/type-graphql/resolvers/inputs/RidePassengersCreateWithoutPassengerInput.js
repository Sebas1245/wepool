"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateWithoutPassengerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateNestedOneWithoutPassengersInput_1 = require("../inputs/RideCreateNestedOneWithoutPassengersInput");
let RidePassengersCreateWithoutPassengerInput = class RidePassengersCreateWithoutPassengerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RidePassengersCreateWithoutPassengerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateNestedOneWithoutPassengersInput_1.RideCreateNestedOneWithoutPassengersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideCreateNestedOneWithoutPassengersInput_1.RideCreateNestedOneWithoutPassengersInput)
], RidePassengersCreateWithoutPassengerInput.prototype, "ride", void 0);
RidePassengersCreateWithoutPassengerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateWithoutPassengerInput", {
        isAbstract: true
    })
], RidePassengersCreateWithoutPassengerInput);
exports.RidePassengersCreateWithoutPassengerInput = RidePassengersCreateWithoutPassengerInput;
