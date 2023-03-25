"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideStatus_1 = require("../../enums/RideStatus");
const StartingPoint_1 = require("../../enums/StartingPoint");
let RideMaxAggregate = class RideMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideMaxAggregate.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideMaxAggregate.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideMaxAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StartingPoint_1.StartingPoint, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideMaxAggregate.prototype, "startsAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideMaxAggregate.prototype, "driverId", void 0);
RideMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RideMaxAggregate", {
        isAbstract: true
    })
], RideMaxAggregate);
exports.RideMaxAggregate = RideMaxAggregate;
