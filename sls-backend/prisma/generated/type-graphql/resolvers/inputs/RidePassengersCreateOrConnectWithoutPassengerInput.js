"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateOrConnectWithoutPassengerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateWithoutPassengerInput_1 = require("../inputs/RidePassengersCreateWithoutPassengerInput");
const RidePassengersWhereUniqueInput_1 = require("../inputs/RidePassengersWhereUniqueInput");
let RidePassengersCreateOrConnectWithoutPassengerInput = class RidePassengersCreateOrConnectWithoutPassengerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], RidePassengersCreateOrConnectWithoutPassengerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateWithoutPassengerInput_1.RidePassengersCreateWithoutPassengerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateWithoutPassengerInput_1.RidePassengersCreateWithoutPassengerInput)
], RidePassengersCreateOrConnectWithoutPassengerInput.prototype, "create", void 0);
RidePassengersCreateOrConnectWithoutPassengerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateOrConnectWithoutPassengerInput", {
        isAbstract: true
    })
], RidePassengersCreateOrConnectWithoutPassengerInput);
exports.RidePassengersCreateOrConnectWithoutPassengerInput = RidePassengersCreateOrConnectWithoutPassengerInput;
