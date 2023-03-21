"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarCreateNestedOneWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateOrConnectWithoutDriverInput_1 = require("../inputs/CarCreateOrConnectWithoutDriverInput");
const CarCreateWithoutDriverInput_1 = require("../inputs/CarCreateWithoutDriverInput");
const CarWhereUniqueInput_1 = require("../inputs/CarWhereUniqueInput");
let CarCreateNestedOneWithoutDriverInput = class CarCreateNestedOneWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateWithoutDriverInput_1.CarCreateWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCreateWithoutDriverInput_1.CarCreateWithoutDriverInput)
], CarCreateNestedOneWithoutDriverInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateOrConnectWithoutDriverInput_1.CarCreateOrConnectWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCreateOrConnectWithoutDriverInput_1.CarCreateOrConnectWithoutDriverInput)
], CarCreateNestedOneWithoutDriverInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereUniqueInput_1.CarWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereUniqueInput_1.CarWhereUniqueInput)
], CarCreateNestedOneWithoutDriverInput.prototype, "connect", void 0);
CarCreateNestedOneWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CarCreateNestedOneWithoutDriverInput", {
        isAbstract: true
    })
], CarCreateNestedOneWithoutDriverInput);
exports.CarCreateNestedOneWithoutDriverInput = CarCreateNestedOneWithoutDriverInput;
