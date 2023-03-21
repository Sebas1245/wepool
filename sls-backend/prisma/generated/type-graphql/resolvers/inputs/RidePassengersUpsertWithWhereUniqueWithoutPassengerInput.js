"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpsertWithWhereUniqueWithoutPassengerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateWithoutPassengerInput_1 = require("../inputs/RidePassengersCreateWithoutPassengerInput");
const RidePassengersUpdateWithoutPassengerInput_1 = require("../inputs/RidePassengersUpdateWithoutPassengerInput");
const RidePassengersWhereUniqueInput_1 = require("../inputs/RidePassengersWhereUniqueInput");
let RidePassengersUpsertWithWhereUniqueWithoutPassengerInput = class RidePassengersUpsertWithWhereUniqueWithoutPassengerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], RidePassengersUpsertWithWhereUniqueWithoutPassengerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersUpdateWithoutPassengerInput_1.RidePassengersUpdateWithoutPassengerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersUpdateWithoutPassengerInput_1.RidePassengersUpdateWithoutPassengerInput)
], RidePassengersUpsertWithWhereUniqueWithoutPassengerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateWithoutPassengerInput_1.RidePassengersCreateWithoutPassengerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateWithoutPassengerInput_1.RidePassengersCreateWithoutPassengerInput)
], RidePassengersUpsertWithWhereUniqueWithoutPassengerInput.prototype, "create", void 0);
RidePassengersUpsertWithWhereUniqueWithoutPassengerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpsertWithWhereUniqueWithoutPassengerInput", {
        isAbstract: true
    })
], RidePassengersUpsertWithWhereUniqueWithoutPassengerInput);
exports.RidePassengersUpsertWithWhereUniqueWithoutPassengerInput = RidePassengersUpsertWithWhereUniqueWithoutPassengerInput;
