"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCreateNestedOneWithoutPassengersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateOrConnectWithoutPassengersInput_1 = require("../inputs/RideCreateOrConnectWithoutPassengersInput");
const RideCreateWithoutPassengersInput_1 = require("../inputs/RideCreateWithoutPassengersInput");
const RideWhereUniqueInput_1 = require("../inputs/RideWhereUniqueInput");
let RideCreateNestedOneWithoutPassengersInput = class RideCreateNestedOneWithoutPassengersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateWithoutPassengersInput_1.RideCreateWithoutPassengersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCreateWithoutPassengersInput_1.RideCreateWithoutPassengersInput)
], RideCreateNestedOneWithoutPassengersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateOrConnectWithoutPassengersInput_1.RideCreateOrConnectWithoutPassengersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCreateOrConnectWithoutPassengersInput_1.RideCreateOrConnectWithoutPassengersInput)
], RideCreateNestedOneWithoutPassengersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], RideCreateNestedOneWithoutPassengersInput.prototype, "connect", void 0);
RideCreateNestedOneWithoutPassengersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideCreateNestedOneWithoutPassengersInput", {
        isAbstract: true
    })
], RideCreateNestedOneWithoutPassengersInput);
exports.RideCreateNestedOneWithoutPassengersInput = RideCreateNestedOneWithoutPassengersInput;
