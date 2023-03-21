"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RidePassengersMaxAggregate = class RidePassengersMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RidePassengersMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersMaxAggregate.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersMaxAggregate.prototype, "rideId", void 0);
RidePassengersMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RidePassengersMaxAggregate", {
        isAbstract: true
    })
], RidePassengersMaxAggregate);
exports.RidePassengersMaxAggregate = RidePassengersMaxAggregate;
