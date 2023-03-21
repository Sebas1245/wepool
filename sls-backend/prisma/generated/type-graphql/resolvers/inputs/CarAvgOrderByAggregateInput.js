"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CarAvgOrderByAggregateInput = class CarAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarAvgOrderByAggregateInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarAvgOrderByAggregateInput.prototype, "capacity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CarAvgOrderByAggregateInput.prototype, "driverId", void 0);
CarAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CarAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CarAvgOrderByAggregateInput);
exports.CarAvgOrderByAggregateInput = CarAvgOrderByAggregateInput;
