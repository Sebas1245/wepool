"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RidePassengersMinOrderByAggregateInput = class RidePassengersMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersMinOrderByAggregateInput.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersMinOrderByAggregateInput.prototype, "rideId", void 0);
RidePassengersMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersMinOrderByAggregateInput", {
        isAbstract: true
    })
], RidePassengersMinOrderByAggregateInput);
exports.RidePassengersMinOrderByAggregateInput = RidePassengersMinOrderByAggregateInput;
