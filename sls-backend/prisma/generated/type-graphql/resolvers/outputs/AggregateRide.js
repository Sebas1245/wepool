"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRide = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideAvgAggregate_1 = require("../outputs/RideAvgAggregate");
const RideCountAggregate_1 = require("../outputs/RideCountAggregate");
const RideMaxAggregate_1 = require("../outputs/RideMaxAggregate");
const RideMinAggregate_1 = require("../outputs/RideMinAggregate");
const RideSumAggregate_1 = require("../outputs/RideSumAggregate");
let AggregateRide = class AggregateRide {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCountAggregate_1.RideCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCountAggregate_1.RideCountAggregate)
], AggregateRide.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideAvgAggregate_1.RideAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideAvgAggregate_1.RideAvgAggregate)
], AggregateRide.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideSumAggregate_1.RideSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideSumAggregate_1.RideSumAggregate)
], AggregateRide.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideMinAggregate_1.RideMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideMinAggregate_1.RideMinAggregate)
], AggregateRide.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideMaxAggregate_1.RideMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideMaxAggregate_1.RideMaxAggregate)
], AggregateRide.prototype, "_max", void 0);
AggregateRide = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateRide", {
        isAbstract: true
    })
], AggregateRide);
exports.AggregateRide = AggregateRide;
