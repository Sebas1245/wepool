"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarUpsertWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateWithoutDriverInput_1 = require("../inputs/CarCreateWithoutDriverInput");
const CarUpdateWithoutDriverInput_1 = require("../inputs/CarUpdateWithoutDriverInput");
let CarUpsertWithoutDriverInput = class CarUpsertWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarUpdateWithoutDriverInput_1.CarUpdateWithoutDriverInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarUpdateWithoutDriverInput_1.CarUpdateWithoutDriverInput)
], CarUpsertWithoutDriverInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateWithoutDriverInput_1.CarCreateWithoutDriverInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarCreateWithoutDriverInput_1.CarCreateWithoutDriverInput)
], CarUpsertWithoutDriverInput.prototype, "create", void 0);
CarUpsertWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CarUpsertWithoutDriverInput", {
        isAbstract: true
    })
], CarUpsertWithoutDriverInput);
exports.CarUpsertWithoutDriverInput = CarUpsertWithoutDriverInput;
