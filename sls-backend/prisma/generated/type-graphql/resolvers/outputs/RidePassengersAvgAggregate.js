"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RidePassengersAvgAggregate = class RidePassengersAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersAvgAggregate.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersAvgAggregate.prototype, "rideId", void 0);
RidePassengersAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RidePassengersAvgAggregate", {
        isAbstract: true
    })
], RidePassengersAvgAggregate);
exports.RidePassengersAvgAggregate = RidePassengersAvgAggregate;
