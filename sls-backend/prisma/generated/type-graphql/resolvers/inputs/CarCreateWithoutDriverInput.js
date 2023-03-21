"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarCreateWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CarCreateWithoutDriverInput = class CarCreateWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CarCreateWithoutDriverInput.prototype, "brand", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CarCreateWithoutDriverInput.prototype, "model", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CarCreateWithoutDriverInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CarCreateWithoutDriverInput.prototype, "plateNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CarCreateWithoutDriverInput.prototype, "capacity", void 0);
CarCreateWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CarCreateWithoutDriverInput", {
        isAbstract: true
    })
], CarCreateWithoutDriverInput);
exports.CarCreateWithoutDriverInput = CarCreateWithoutDriverInput;
