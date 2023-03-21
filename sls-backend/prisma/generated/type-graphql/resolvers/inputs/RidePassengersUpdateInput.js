"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const RideUpdateOneRequiredWithoutPassengersNestedInput_1 = require("../inputs/RideUpdateOneRequiredWithoutPassengersNestedInput");
const UserUpdateOneRequiredWithoutPassengerRidesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPassengerRidesNestedInput");
let RidePassengersUpdateInput = class RidePassengersUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RidePassengersUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPassengerRidesNestedInput_1.UserUpdateOneRequiredWithoutPassengerRidesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPassengerRidesNestedInput_1.UserUpdateOneRequiredWithoutPassengerRidesNestedInput)
], RidePassengersUpdateInput.prototype, "passenger", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideUpdateOneRequiredWithoutPassengersNestedInput_1.RideUpdateOneRequiredWithoutPassengersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideUpdateOneRequiredWithoutPassengersNestedInput_1.RideUpdateOneRequiredWithoutPassengersNestedInput)
], RidePassengersUpdateInput.prototype, "ride", void 0);
RidePassengersUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpdateInput", {
        isAbstract: true
    })
], RidePassengersUpdateInput);
exports.RidePassengersUpdateInput = RidePassengersUpdateInput;
