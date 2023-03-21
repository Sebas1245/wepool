"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpdateWithoutRideInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutPassengerRidesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPassengerRidesNestedInput");
let RidePassengersUpdateWithoutRideInput = class RidePassengersUpdateWithoutRideInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RidePassengersUpdateWithoutRideInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPassengerRidesNestedInput_1.UserUpdateOneRequiredWithoutPassengerRidesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPassengerRidesNestedInput_1.UserUpdateOneRequiredWithoutPassengerRidesNestedInput)
], RidePassengersUpdateWithoutRideInput.prototype, "passenger", void 0);
RidePassengersUpdateWithoutRideInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpdateWithoutRideInput", {
        isAbstract: true
    })
], RidePassengersUpdateWithoutRideInput);
exports.RidePassengersUpdateWithoutRideInput = RidePassengersUpdateWithoutRideInput;
