"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateManyRideInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateManyRideInput_1 = require("../inputs/RidePassengersCreateManyRideInput");
let RidePassengersCreateManyRideInputEnvelope = class RidePassengersCreateManyRideInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateManyRideInput_1.RidePassengersCreateManyRideInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersCreateManyRideInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RidePassengersCreateManyRideInputEnvelope.prototype, "skipDuplicates", void 0);
RidePassengersCreateManyRideInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateManyRideInputEnvelope", {
        isAbstract: true
    })
], RidePassengersCreateManyRideInputEnvelope);
exports.RidePassengersCreateManyRideInputEnvelope = RidePassengersCreateManyRideInputEnvelope;
