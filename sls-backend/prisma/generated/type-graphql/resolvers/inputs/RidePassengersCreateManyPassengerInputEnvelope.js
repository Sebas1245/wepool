"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateManyPassengerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateManyPassengerInput_1 = require("../inputs/RidePassengersCreateManyPassengerInput");
let RidePassengersCreateManyPassengerInputEnvelope = class RidePassengersCreateManyPassengerInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateManyPassengerInput_1.RidePassengersCreateManyPassengerInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersCreateManyPassengerInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RidePassengersCreateManyPassengerInputEnvelope.prototype, "skipDuplicates", void 0);
RidePassengersCreateManyPassengerInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateManyPassengerInputEnvelope", {
        isAbstract: true
    })
], RidePassengersCreateManyPassengerInputEnvelope);
exports.RidePassengersCreateManyPassengerInputEnvelope = RidePassengersCreateManyPassengerInputEnvelope;
