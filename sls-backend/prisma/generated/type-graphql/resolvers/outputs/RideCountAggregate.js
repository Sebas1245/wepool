"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RideCountAggregate = class RideCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCountAggregate.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCountAggregate.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCountAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCountAggregate.prototype, "driverId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCountAggregate.prototype, "_all", void 0);
RideCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RideCountAggregate", {
        isAbstract: true
    })
], RideCountAggregate);
exports.RideCountAggregate = RideCountAggregate;
