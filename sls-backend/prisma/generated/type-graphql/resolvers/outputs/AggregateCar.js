"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCar = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarAvgAggregate_1 = require("../outputs/CarAvgAggregate");
const CarCountAggregate_1 = require("../outputs/CarCountAggregate");
const CarMaxAggregate_1 = require("../outputs/CarMaxAggregate");
const CarMinAggregate_1 = require("../outputs/CarMinAggregate");
const CarSumAggregate_1 = require("../outputs/CarSumAggregate");
let AggregateCar = class AggregateCar {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCountAggregate_1.CarCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCountAggregate_1.CarCountAggregate)
], AggregateCar.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarAvgAggregate_1.CarAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarAvgAggregate_1.CarAvgAggregate)
], AggregateCar.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarSumAggregate_1.CarSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarSumAggregate_1.CarSumAggregate)
], AggregateCar.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarMinAggregate_1.CarMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarMinAggregate_1.CarMinAggregate)
], AggregateCar.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarMaxAggregate_1.CarMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarMaxAggregate_1.CarMaxAggregate)
], AggregateCar.prototype, "_max", void 0);
AggregateCar = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCar", {
        isAbstract: true
    })
], AggregateCar);
exports.AggregateCar = AggregateCar;
