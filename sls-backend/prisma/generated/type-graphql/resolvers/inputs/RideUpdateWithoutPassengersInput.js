"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideUpdateWithoutPassengersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumRideStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumRideStatusFieldUpdateOperationsInput");
const EnumStartingPointFieldUpdateOperationsInput_1 = require("../inputs/EnumStartingPointFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutDriverRidesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutDriverRidesNestedInput");
let RideUpdateWithoutPassengersInput = class RideUpdateWithoutPassengersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], RideUpdateWithoutPassengersInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], RideUpdateWithoutPassengersInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRideStatusFieldUpdateOperationsInput_1.EnumRideStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRideStatusFieldUpdateOperationsInput_1.EnumRideStatusFieldUpdateOperationsInput)
], RideUpdateWithoutPassengersInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStartingPointFieldUpdateOperationsInput_1.EnumStartingPointFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStartingPointFieldUpdateOperationsInput_1.EnumStartingPointFieldUpdateOperationsInput)
], RideUpdateWithoutPassengersInput.prototype, "startsAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RideUpdateWithoutPassengersInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutDriverRidesNestedInput_1.UserUpdateOneRequiredWithoutDriverRidesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutDriverRidesNestedInput_1.UserUpdateOneRequiredWithoutDriverRidesNestedInput)
], RideUpdateWithoutPassengersInput.prototype, "driver", void 0);
RideUpdateWithoutPassengersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideUpdateWithoutPassengersInput", {
        isAbstract: true
    })
], RideUpdateWithoutPassengersInput);
exports.RideUpdateWithoutPassengersInput = RideUpdateWithoutPassengersInput;
