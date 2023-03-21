"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpsertWithWhereUniqueWithoutRideInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateWithoutRideInput_1 = require("../inputs/RidePassengersCreateWithoutRideInput");
const RidePassengersUpdateWithoutRideInput_1 = require("../inputs/RidePassengersUpdateWithoutRideInput");
const RidePassengersWhereUniqueInput_1 = require("../inputs/RidePassengersWhereUniqueInput");
let RidePassengersUpsertWithWhereUniqueWithoutRideInput = class RidePassengersUpsertWithWhereUniqueWithoutRideInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], RidePassengersUpsertWithWhereUniqueWithoutRideInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersUpdateWithoutRideInput_1.RidePassengersUpdateWithoutRideInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersUpdateWithoutRideInput_1.RidePassengersUpdateWithoutRideInput)
], RidePassengersUpsertWithWhereUniqueWithoutRideInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateWithoutRideInput_1.RidePassengersCreateWithoutRideInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateWithoutRideInput_1.RidePassengersCreateWithoutRideInput)
], RidePassengersUpsertWithWhereUniqueWithoutRideInput.prototype, "create", void 0);
RidePassengersUpsertWithWhereUniqueWithoutRideInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpsertWithWhereUniqueWithoutRideInput", {
        isAbstract: true
    })
], RidePassengersUpsertWithWhereUniqueWithoutRideInput);
exports.RidePassengersUpsertWithWhereUniqueWithoutRideInput = RidePassengersUpsertWithWhereUniqueWithoutRideInput;
