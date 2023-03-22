"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableFloatFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NullableFloatFieldUpdateOperationsInput = class NullableFloatFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NullableFloatFieldUpdateOperationsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NullableFloatFieldUpdateOperationsInput.prototype, "increment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NullableFloatFieldUpdateOperationsInput.prototype, "decrement", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NullableFloatFieldUpdateOperationsInput.prototype, "multiply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NullableFloatFieldUpdateOperationsInput.prototype, "divide", void 0);
NullableFloatFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableFloatFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableFloatFieldUpdateOperationsInput);
exports.NullableFloatFieldUpdateOperationsInput = NullableFloatFieldUpdateOperationsInput;
