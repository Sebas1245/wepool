"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideUpdateWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumRideStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumRideStatusFieldUpdateOperationsInput");
const EnumStartingPointFieldUpdateOperationsInput_1 = require("../inputs/EnumStartingPointFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const RidePassengersUpdateManyWithoutRideNestedInput_1 = require("../inputs/RidePassengersUpdateManyWithoutRideNestedInput");
let RideUpdateWithoutDriverInput = class RideUpdateWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], RideUpdateWithoutDriverInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], RideUpdateWithoutDriverInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRideStatusFieldUpdateOperationsInput_1.EnumRideStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRideStatusFieldUpdateOperationsInput_1.EnumRideStatusFieldUpdateOperationsInput)
], RideUpdateWithoutDriverInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStartingPointFieldUpdateOperationsInput_1.EnumStartingPointFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStartingPointFieldUpdateOperationsInput_1.EnumStartingPointFieldUpdateOperationsInput)
], RideUpdateWithoutDriverInput.prototype, "startsAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersUpdateManyWithoutRideNestedInput_1.RidePassengersUpdateManyWithoutRideNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersUpdateManyWithoutRideNestedInput_1.RidePassengersUpdateManyWithoutRideNestedInput)
], RideUpdateWithoutDriverInput.prototype, "passengers", void 0);
RideUpdateWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideUpdateWithoutDriverInput", {
        isAbstract: true
    })
], RideUpdateWithoutDriverInput);
exports.RideUpdateWithoutDriverInput = RideUpdateWithoutDriverInput;
