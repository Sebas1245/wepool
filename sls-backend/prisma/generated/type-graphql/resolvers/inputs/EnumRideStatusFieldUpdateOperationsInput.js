"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRideStatusFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideStatus_1 = require("../../enums/RideStatus");
let EnumRideStatusFieldUpdateOperationsInput = class EnumRideStatusFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumRideStatusFieldUpdateOperationsInput.prototype, "set", void 0);
EnumRideStatusFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumRideStatusFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumRideStatusFieldUpdateOperationsInput);
exports.EnumRideStatusFieldUpdateOperationsInput = EnumRideStatusFieldUpdateOperationsInput;
