"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideUpsertWithoutPassengersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateWithoutPassengersInput_1 = require("../inputs/RideCreateWithoutPassengersInput");
const RideUpdateWithoutPassengersInput_1 = require("../inputs/RideUpdateWithoutPassengersInput");
let RideUpsertWithoutPassengersInput = class RideUpsertWithoutPassengersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideUpdateWithoutPassengersInput_1.RideUpdateWithoutPassengersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideUpdateWithoutPassengersInput_1.RideUpdateWithoutPassengersInput)
], RideUpsertWithoutPassengersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateWithoutPassengersInput_1.RideCreateWithoutPassengersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideCreateWithoutPassengersInput_1.RideCreateWithoutPassengersInput)
], RideUpsertWithoutPassengersInput.prototype, "create", void 0);
RideUpsertWithoutPassengersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideUpsertWithoutPassengersInput", {
        isAbstract: true
    })
], RideUpsertWithoutPassengersInput);
exports.RideUpsertWithoutPassengersInput = RideUpsertWithoutPassengersInput;
