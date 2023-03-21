"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CarAvgAggregate = class CarAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CarAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CarAvgAggregate.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CarAvgAggregate.prototype, "capacity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CarAvgAggregate.prototype, "driverId", void 0);
CarAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CarAvgAggregate", {
        isAbstract: true
    })
], CarAvgAggregate);
exports.CarAvgAggregate = CarAvgAggregate;
