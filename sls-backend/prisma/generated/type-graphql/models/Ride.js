"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ride = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideStatus_1 = require("../enums/RideStatus");
const RideCount_1 = require("../resolvers/outputs/RideCount");
let Ride = class Ride {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Ride.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Ride.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Ride.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Ride.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Ride.prototype, "driverId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCount_1.RideCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCount_1.RideCount)
], Ride.prototype, "_count", void 0);
Ride = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Ride", {
        isAbstract: true
    })
], Ride);
exports.Ride = Ride;
