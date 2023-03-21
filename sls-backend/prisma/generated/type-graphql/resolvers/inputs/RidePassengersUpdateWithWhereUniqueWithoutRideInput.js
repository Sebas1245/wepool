"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpdateWithWhereUniqueWithoutRideInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersUpdateWithoutRideInput_1 = require("../inputs/RidePassengersUpdateWithoutRideInput");
const RidePassengersWhereUniqueInput_1 = require("../inputs/RidePassengersWhereUniqueInput");
let RidePassengersUpdateWithWhereUniqueWithoutRideInput = class RidePassengersUpdateWithWhereUniqueWithoutRideInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], RidePassengersUpdateWithWhereUniqueWithoutRideInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersUpdateWithoutRideInput_1.RidePassengersUpdateWithoutRideInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersUpdateWithoutRideInput_1.RidePassengersUpdateWithoutRideInput)
], RidePassengersUpdateWithWhereUniqueWithoutRideInput.prototype, "data", void 0);
RidePassengersUpdateWithWhereUniqueWithoutRideInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpdateWithWhereUniqueWithoutRideInput", {
        isAbstract: true
    })
], RidePassengersUpdateWithWhereUniqueWithoutRideInput);
exports.RidePassengersUpdateWithWhereUniqueWithoutRideInput = RidePassengersUpdateWithWhereUniqueWithoutRideInput;
