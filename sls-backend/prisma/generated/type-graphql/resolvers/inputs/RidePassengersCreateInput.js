"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateNestedOneWithoutPassengersInput_1 = require("../inputs/RideCreateNestedOneWithoutPassengersInput");
const UserCreateNestedOneWithoutPassengerRidesInput_1 = require("../inputs/UserCreateNestedOneWithoutPassengerRidesInput");
let RidePassengersCreateInput = class RidePassengersCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RidePassengersCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPassengerRidesInput_1.UserCreateNestedOneWithoutPassengerRidesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPassengerRidesInput_1.UserCreateNestedOneWithoutPassengerRidesInput)
], RidePassengersCreateInput.prototype, "passenger", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateNestedOneWithoutPassengersInput_1.RideCreateNestedOneWithoutPassengersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideCreateNestedOneWithoutPassengersInput_1.RideCreateNestedOneWithoutPassengersInput)
], RidePassengersCreateInput.prototype, "ride", void 0);
RidePassengersCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateInput", {
        isAbstract: true
    })
], RidePassengersCreateInput);
exports.RidePassengersCreateInput = RidePassengersCreateInput;
