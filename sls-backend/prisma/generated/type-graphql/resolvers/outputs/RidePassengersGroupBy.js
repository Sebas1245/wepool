"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersAvgAggregate_1 = require("../outputs/RidePassengersAvgAggregate");
const RidePassengersCountAggregate_1 = require("../outputs/RidePassengersCountAggregate");
const RidePassengersMaxAggregate_1 = require("../outputs/RidePassengersMaxAggregate");
const RidePassengersMinAggregate_1 = require("../outputs/RidePassengersMinAggregate");
const RidePassengersSumAggregate_1 = require("../outputs/RidePassengersSumAggregate");
let RidePassengersGroupBy = class RidePassengersGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RidePassengersGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersGroupBy.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersGroupBy.prototype, "rideId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCountAggregate_1.RidePassengersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCountAggregate_1.RidePassengersCountAggregate)
], RidePassengersGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersAvgAggregate_1.RidePassengersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersAvgAggregate_1.RidePassengersAvgAggregate)
], RidePassengersGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersSumAggregate_1.RidePassengersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersSumAggregate_1.RidePassengersSumAggregate)
], RidePassengersGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersMinAggregate_1.RidePassengersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersMinAggregate_1.RidePassengersMinAggregate)
], RidePassengersGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersMaxAggregate_1.RidePassengersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersMaxAggregate_1.RidePassengersMaxAggregate)
], RidePassengersGroupBy.prototype, "_max", void 0);
RidePassengersGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RidePassengersGroupBy", {
        isAbstract: true
    })
], RidePassengersGroupBy);
exports.RidePassengersGroupBy = RidePassengersGroupBy;
