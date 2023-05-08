"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideAvgAggregate_1 = require("../outputs/RideAvgAggregate");
const RideCountAggregate_1 = require("../outputs/RideCountAggregate");
const RideMaxAggregate_1 = require("../outputs/RideMaxAggregate");
const RideMinAggregate_1 = require("../outputs/RideMinAggregate");
const RideSumAggregate_1 = require("../outputs/RideSumAggregate");
const RideStatus_1 = require("../../enums/RideStatus");
const StartingPoint_1 = require("../../enums/StartingPoint");
let RideGroupBy = class RideGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideGroupBy.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideGroupBy.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RideGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StartingPoint_1.StartingPoint, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RideGroupBy.prototype, "startsAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RideGroupBy.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideGroupBy.prototype, "driverId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCountAggregate_1.RideCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCountAggregate_1.RideCountAggregate)
], RideGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideAvgAggregate_1.RideAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideAvgAggregate_1.RideAvgAggregate)
], RideGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideSumAggregate_1.RideSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideSumAggregate_1.RideSumAggregate)
], RideGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideMinAggregate_1.RideMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideMinAggregate_1.RideMinAggregate)
], RideGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideMaxAggregate_1.RideMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideMaxAggregate_1.RideMaxAggregate)
], RideGroupBy.prototype, "_max", void 0);
RideGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RideGroupBy", {
        isAbstract: true
    })
], RideGroupBy);
exports.RideGroupBy = RideGroupBy;
