"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarCreateOrConnectWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateWithoutDriverInput_1 = require("../inputs/CarCreateWithoutDriverInput");
const CarWhereUniqueInput_1 = require("../inputs/CarWhereUniqueInput");
let CarCreateOrConnectWithoutDriverInput = class CarCreateOrConnectWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereUniqueInput_1.CarWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarWhereUniqueInput_1.CarWhereUniqueInput)
], CarCreateOrConnectWithoutDriverInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateWithoutDriverInput_1.CarCreateWithoutDriverInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarCreateWithoutDriverInput_1.CarCreateWithoutDriverInput)
], CarCreateOrConnectWithoutDriverInput.prototype, "create", void 0);
CarCreateOrConnectWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CarCreateOrConnectWithoutDriverInput", {
        isAbstract: true
    })
], CarCreateOrConnectWithoutDriverInput);
exports.CarCreateOrConnectWithoutDriverInput = CarCreateOrConnectWithoutDriverInput;
