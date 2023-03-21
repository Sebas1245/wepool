"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpdateWithWhereUniqueWithoutPassengerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersUpdateWithoutPassengerInput_1 = require("../inputs/RidePassengersUpdateWithoutPassengerInput");
const RidePassengersWhereUniqueInput_1 = require("../inputs/RidePassengersWhereUniqueInput");
let RidePassengersUpdateWithWhereUniqueWithoutPassengerInput = class RidePassengersUpdateWithWhereUniqueWithoutPassengerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], RidePassengersUpdateWithWhereUniqueWithoutPassengerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersUpdateWithoutPassengerInput_1.RidePassengersUpdateWithoutPassengerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersUpdateWithoutPassengerInput_1.RidePassengersUpdateWithoutPassengerInput)
], RidePassengersUpdateWithWhereUniqueWithoutPassengerInput.prototype, "data", void 0);
RidePassengersUpdateWithWhereUniqueWithoutPassengerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpdateWithWhereUniqueWithoutPassengerInput", {
        isAbstract: true
    })
], RidePassengersUpdateWithWhereUniqueWithoutPassengerInput);
exports.RidePassengersUpdateWithWhereUniqueWithoutPassengerInput = RidePassengersUpdateWithWhereUniqueWithoutPassengerInput;
