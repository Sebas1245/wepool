"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideAvgOrderByAggregateInput_1 = require("../inputs/RideAvgOrderByAggregateInput");
const RideCountOrderByAggregateInput_1 = require("../inputs/RideCountOrderByAggregateInput");
const RideMaxOrderByAggregateInput_1 = require("../inputs/RideMaxOrderByAggregateInput");
const RideMinOrderByAggregateInput_1 = require("../inputs/RideMinOrderByAggregateInput");
const RideSumOrderByAggregateInput_1 = require("../inputs/RideSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RideOrderByWithAggregationInput = class RideOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideOrderByWithAggregationInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideOrderByWithAggregationInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideOrderByWithAggregationInput.prototype, "driverId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCountOrderByAggregateInput_1.RideCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCountOrderByAggregateInput_1.RideCountOrderByAggregateInput)
], RideOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideAvgOrderByAggregateInput_1.RideAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideAvgOrderByAggregateInput_1.RideAvgOrderByAggregateInput)
], RideOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideMaxOrderByAggregateInput_1.RideMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideMaxOrderByAggregateInput_1.RideMaxOrderByAggregateInput)
], RideOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideMinOrderByAggregateInput_1.RideMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideMinOrderByAggregateInput_1.RideMinOrderByAggregateInput)
], RideOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideSumOrderByAggregateInput_1.RideSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideSumOrderByAggregateInput_1.RideSumOrderByAggregateInput)
], RideOrderByWithAggregationInput.prototype, "_sum", void 0);
RideOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideOrderByWithAggregationInput", {
        isAbstract: true
    })
], RideOrderByWithAggregationInput);
exports.RideOrderByWithAggregationInput = RideOrderByWithAggregationInput;
