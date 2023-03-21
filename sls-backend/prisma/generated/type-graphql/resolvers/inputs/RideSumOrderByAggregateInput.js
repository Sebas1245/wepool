"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RideSumOrderByAggregateInput = class RideSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideSumOrderByAggregateInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideSumOrderByAggregateInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideSumOrderByAggregateInput.prototype, "driverId", void 0);
RideSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideSumOrderByAggregateInput", {
        isAbstract: true
    })
], RideSumOrderByAggregateInput);
exports.RideSumOrderByAggregateInput = RideSumOrderByAggregateInput;
