"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarAvgAggregate_1 = require("../outputs/CarAvgAggregate");
const CarCountAggregate_1 = require("../outputs/CarCountAggregate");
const CarMaxAggregate_1 = require("../outputs/CarMaxAggregate");
const CarMinAggregate_1 = require("../outputs/CarMinAggregate");
const CarSumAggregate_1 = require("../outputs/CarSumAggregate");
let CarGroupBy = class CarGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CarGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CarGroupBy.prototype, "brand", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CarGroupBy.prototype, "model", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CarGroupBy.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CarGroupBy.prototype, "plateNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CarGroupBy.prototype, "capacity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CarGroupBy.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CarGroupBy.prototype, "driverId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCountAggregate_1.CarCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCountAggregate_1.CarCountAggregate)
], CarGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarAvgAggregate_1.CarAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarAvgAggregate_1.CarAvgAggregate)
], CarGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarSumAggregate_1.CarSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarSumAggregate_1.CarSumAggregate)
], CarGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarMinAggregate_1.CarMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarMinAggregate_1.CarMinAggregate)
], CarGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarMaxAggregate_1.CarMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarMaxAggregate_1.CarMaxAggregate)
], CarGroupBy.prototype, "_max", void 0);
CarGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CarGroupBy", {
        isAbstract: true
    })
], CarGroupBy);
exports.CarGroupBy = CarGroupBy;
