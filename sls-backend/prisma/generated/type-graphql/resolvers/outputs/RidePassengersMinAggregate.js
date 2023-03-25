"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RidePassengersMinAggregate = class RidePassengersMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RidePassengersMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersMinAggregate.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersMinAggregate.prototype, "rideId", void 0);
RidePassengersMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RidePassengersMinAggregate", {
        isAbstract: true
    })
], RidePassengersMinAggregate);
exports.RidePassengersMinAggregate = RidePassengersMinAggregate;
