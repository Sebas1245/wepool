"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let RidePassengersUpdateManyMutationInput = class RidePassengersUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RidePassengersUpdateManyMutationInput.prototype, "createdAt", void 0);
RidePassengersUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpdateManyMutationInput", {
        isAbstract: true
    })
], RidePassengersUpdateManyMutationInput);
exports.RidePassengersUpdateManyMutationInput = RidePassengersUpdateManyMutationInput;
