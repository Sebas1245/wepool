"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CarSumAggregate = class CarSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CarSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CarSumAggregate.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CarSumAggregate.prototype, "capacity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CarSumAggregate.prototype, "driverId", void 0);
CarSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CarSumAggregate", {
        isAbstract: true
    })
], CarSumAggregate);
exports.CarSumAggregate = CarSumAggregate;
