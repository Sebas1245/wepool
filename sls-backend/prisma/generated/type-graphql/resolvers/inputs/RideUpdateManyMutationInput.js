"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumRideStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumRideStatusFieldUpdateOperationsInput");
const EnumStartingPointFieldUpdateOperationsInput_1 = require("../inputs/EnumStartingPointFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
let RideUpdateManyMutationInput = class RideUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], RideUpdateManyMutationInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], RideUpdateManyMutationInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRideStatusFieldUpdateOperationsInput_1.EnumRideStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRideStatusFieldUpdateOperationsInput_1.EnumRideStatusFieldUpdateOperationsInput)
], RideUpdateManyMutationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStartingPointFieldUpdateOperationsInput_1.EnumStartingPointFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStartingPointFieldUpdateOperationsInput_1.EnumStartingPointFieldUpdateOperationsInput)
], RideUpdateManyMutationInput.prototype, "startsAt", void 0);
RideUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideUpdateManyMutationInput", {
        isAbstract: true
    })
], RideUpdateManyMutationInput);
exports.RideUpdateManyMutationInput = RideUpdateManyMutationInput;
