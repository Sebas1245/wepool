"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RidePassengersMaxOrderByAggregateInput = class RidePassengersMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersMaxOrderByAggregateInput.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersMaxOrderByAggregateInput.prototype, "rideId", void 0);
RidePassengersMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersMaxOrderByAggregateInput", {
        isAbstract: true
    })
], RidePassengersMaxOrderByAggregateInput);
exports.RidePassengersMaxOrderByAggregateInput = RidePassengersMaxOrderByAggregateInput;
