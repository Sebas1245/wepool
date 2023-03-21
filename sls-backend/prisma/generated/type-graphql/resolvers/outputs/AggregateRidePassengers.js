"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRidePassengers = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersAvgAggregate_1 = require("../outputs/RidePassengersAvgAggregate");
const RidePassengersCountAggregate_1 = require("../outputs/RidePassengersCountAggregate");
const RidePassengersMaxAggregate_1 = require("../outputs/RidePassengersMaxAggregate");
const RidePassengersMinAggregate_1 = require("../outputs/RidePassengersMinAggregate");
const RidePassengersSumAggregate_1 = require("../outputs/RidePassengersSumAggregate");
let AggregateRidePassengers = class AggregateRidePassengers {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCountAggregate_1.RidePassengersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCountAggregate_1.RidePassengersCountAggregate)
], AggregateRidePassengers.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersAvgAggregate_1.RidePassengersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersAvgAggregate_1.RidePassengersAvgAggregate)
], AggregateRidePassengers.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersSumAggregate_1.RidePassengersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersSumAggregate_1.RidePassengersSumAggregate)
], AggregateRidePassengers.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersMinAggregate_1.RidePassengersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersMinAggregate_1.RidePassengersMinAggregate)
], AggregateRidePassengers.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersMaxAggregate_1.RidePassengersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersMaxAggregate_1.RidePassengersMaxAggregate)
], AggregateRidePassengers.prototype, "_max", void 0);
AggregateRidePassengers = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateRidePassengers", {
        isAbstract: true
    })
], AggregateRidePassengers);
exports.AggregateRidePassengers = AggregateRidePassengers;
