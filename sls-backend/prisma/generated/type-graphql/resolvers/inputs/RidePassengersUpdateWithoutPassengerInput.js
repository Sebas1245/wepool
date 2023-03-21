"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpdateWithoutPassengerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const RideUpdateOneRequiredWithoutPassengersNestedInput_1 = require("../inputs/RideUpdateOneRequiredWithoutPassengersNestedInput");
let RidePassengersUpdateWithoutPassengerInput = class RidePassengersUpdateWithoutPassengerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RidePassengersUpdateWithoutPassengerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideUpdateOneRequiredWithoutPassengersNestedInput_1.RideUpdateOneRequiredWithoutPassengersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideUpdateOneRequiredWithoutPassengersNestedInput_1.RideUpdateOneRequiredWithoutPassengersNestedInput)
], RidePassengersUpdateWithoutPassengerInput.prototype, "ride", void 0);
RidePassengersUpdateWithoutPassengerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpdateWithoutPassengerInput", {
        isAbstract: true
    })
], RidePassengersUpdateWithoutPassengerInput);
exports.RidePassengersUpdateWithoutPassengerInput = RidePassengersUpdateWithoutPassengerInput;
