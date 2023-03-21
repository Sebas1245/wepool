"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRideArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideOrderByWithAggregationInput_1 = require("../../../inputs/RideOrderByWithAggregationInput");
const RideScalarWhereWithAggregatesInput_1 = require("../../../inputs/RideScalarWhereWithAggregatesInput");
const RideWhereInput_1 = require("../../../inputs/RideWhereInput");
const RideScalarFieldEnum_1 = require("../../../../enums/RideScalarFieldEnum");
let GroupByRideArgs = class GroupByRideArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], GroupByRideArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideOrderByWithAggregationInput_1.RideOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRideArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarFieldEnum_1.RideScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRideArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideScalarWhereWithAggregatesInput_1.RideScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideScalarWhereWithAggregatesInput_1.RideScalarWhereWithAggregatesInput)
], GroupByRideArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRideArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRideArgs.prototype, "skip", void 0);
GroupByRideArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByRideArgs);
exports.GroupByRideArgs = GroupByRideArgs;
