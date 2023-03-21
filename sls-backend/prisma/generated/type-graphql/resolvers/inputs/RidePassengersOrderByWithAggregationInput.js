"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersAvgOrderByAggregateInput_1 = require("../inputs/RidePassengersAvgOrderByAggregateInput");
const RidePassengersCountOrderByAggregateInput_1 = require("../inputs/RidePassengersCountOrderByAggregateInput");
const RidePassengersMaxOrderByAggregateInput_1 = require("../inputs/RidePassengersMaxOrderByAggregateInput");
const RidePassengersMinOrderByAggregateInput_1 = require("../inputs/RidePassengersMinOrderByAggregateInput");
const RidePassengersSumOrderByAggregateInput_1 = require("../inputs/RidePassengersSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RidePassengersOrderByWithAggregationInput = class RidePassengersOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersOrderByWithAggregationInput.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersOrderByWithAggregationInput.prototype, "rideId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCountOrderByAggregateInput_1.RidePassengersCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCountOrderByAggregateInput_1.RidePassengersCountOrderByAggregateInput)
], RidePassengersOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersAvgOrderByAggregateInput_1.RidePassengersAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersAvgOrderByAggregateInput_1.RidePassengersAvgOrderByAggregateInput)
], RidePassengersOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersMaxOrderByAggregateInput_1.RidePassengersMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersMaxOrderByAggregateInput_1.RidePassengersMaxOrderByAggregateInput)
], RidePassengersOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersMinOrderByAggregateInput_1.RidePassengersMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersMinOrderByAggregateInput_1.RidePassengersMinOrderByAggregateInput)
], RidePassengersOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersSumOrderByAggregateInput_1.RidePassengersSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersSumOrderByAggregateInput_1.RidePassengersSumOrderByAggregateInput)
], RidePassengersOrderByWithAggregationInput.prototype, "_sum", void 0);
RidePassengersOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersOrderByWithAggregationInput", {
        isAbstract: true
    })
], RidePassengersOrderByWithAggregationInput);
exports.RidePassengersOrderByWithAggregationInput = RidePassengersOrderByWithAggregationInput;
