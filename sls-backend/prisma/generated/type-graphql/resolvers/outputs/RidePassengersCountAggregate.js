"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RidePassengersCountAggregate = class RidePassengersCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCountAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCountAggregate.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCountAggregate.prototype, "rideId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCountAggregate.prototype, "_all", void 0);
RidePassengersCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RidePassengersCountAggregate", {
        isAbstract: true
    })
], RidePassengersCountAggregate);
exports.RidePassengersCountAggregate = RidePassengersCountAggregate;
