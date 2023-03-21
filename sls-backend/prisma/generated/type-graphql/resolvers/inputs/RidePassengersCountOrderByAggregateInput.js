"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RidePassengersCountOrderByAggregateInput = class RidePassengersCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersCountOrderByAggregateInput.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersCountOrderByAggregateInput.prototype, "rideId", void 0);
RidePassengersCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCountOrderByAggregateInput", {
        isAbstract: true
    })
], RidePassengersCountOrderByAggregateInput);
exports.RidePassengersCountOrderByAggregateInput = RidePassengersCountOrderByAggregateInput;
