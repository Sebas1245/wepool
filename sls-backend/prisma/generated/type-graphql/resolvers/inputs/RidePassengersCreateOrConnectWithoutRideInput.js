"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateOrConnectWithoutRideInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateWithoutRideInput_1 = require("../inputs/RidePassengersCreateWithoutRideInput");
const RidePassengersWhereUniqueInput_1 = require("../inputs/RidePassengersWhereUniqueInput");
let RidePassengersCreateOrConnectWithoutRideInput = class RidePassengersCreateOrConnectWithoutRideInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], RidePassengersCreateOrConnectWithoutRideInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateWithoutRideInput_1.RidePassengersCreateWithoutRideInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateWithoutRideInput_1.RidePassengersCreateWithoutRideInput)
], RidePassengersCreateOrConnectWithoutRideInput.prototype, "create", void 0);
RidePassengersCreateOrConnectWithoutRideInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateOrConnectWithoutRideInput", {
        isAbstract: true
    })
], RidePassengersCreateOrConnectWithoutRideInput);
exports.RidePassengersCreateOrConnectWithoutRideInput = RidePassengersCreateOrConnectWithoutRideInput;
