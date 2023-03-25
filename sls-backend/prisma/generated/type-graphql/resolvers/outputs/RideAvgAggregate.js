"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RideAvgAggregate = class RideAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideAvgAggregate.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideAvgAggregate.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideAvgAggregate.prototype, "driverId", void 0);
RideAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RideAvgAggregate", {
        isAbstract: true
    })
], RideAvgAggregate);
exports.RideAvgAggregate = RideAvgAggregate;
