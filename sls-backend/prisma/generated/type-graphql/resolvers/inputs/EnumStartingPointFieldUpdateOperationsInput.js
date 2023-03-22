"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumStartingPointFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StartingPoint_1 = require("../../enums/StartingPoint");
let EnumStartingPointFieldUpdateOperationsInput = class EnumStartingPointFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StartingPoint_1.StartingPoint, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumStartingPointFieldUpdateOperationsInput.prototype, "set", void 0);
EnumStartingPointFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumStartingPointFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumStartingPointFieldUpdateOperationsInput);
exports.EnumStartingPointFieldUpdateOperationsInput = EnumStartingPointFieldUpdateOperationsInput;
