"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCreateOrConnectWithoutPassengersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateWithoutPassengersInput_1 = require("../inputs/RideCreateWithoutPassengersInput");
const RideWhereUniqueInput_1 = require("../inputs/RideWhereUniqueInput");
let RideCreateOrConnectWithoutPassengersInput = class RideCreateOrConnectWithoutPassengersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], RideCreateOrConnectWithoutPassengersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateWithoutPassengersInput_1.RideCreateWithoutPassengersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideCreateWithoutPassengersInput_1.RideCreateWithoutPassengersInput)
], RideCreateOrConnectWithoutPassengersInput.prototype, "create", void 0);
RideCreateOrConnectWithoutPassengersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideCreateOrConnectWithoutPassengersInput", {
        isAbstract: true
    })
], RideCreateOrConnectWithoutPassengersInput);
exports.RideCreateOrConnectWithoutPassengersInput = RideCreateOrConnectWithoutPassengersInput;
