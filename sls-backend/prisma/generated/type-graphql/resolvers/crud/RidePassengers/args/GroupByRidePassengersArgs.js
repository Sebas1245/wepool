"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRidePassengersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersOrderByWithAggregationInput_1 = require("../../../inputs/RidePassengersOrderByWithAggregationInput");
const RidePassengersScalarWhereWithAggregatesInput_1 = require("../../../inputs/RidePassengersScalarWhereWithAggregatesInput");
const RidePassengersWhereInput_1 = require("../../../inputs/RidePassengersWhereInput");
const RidePassengersScalarFieldEnum_1 = require("../../../../enums/RidePassengersScalarFieldEnum");
let GroupByRidePassengersArgs = class GroupByRidePassengersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereInput_1.RidePassengersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereInput_1.RidePassengersWhereInput)
], GroupByRidePassengersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersOrderByWithAggregationInput_1.RidePassengersOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRidePassengersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersScalarFieldEnum_1.RidePassengersScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRidePassengersArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersScalarWhereWithAggregatesInput_1.RidePassengersScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersScalarWhereWithAggregatesInput_1.RidePassengersScalarWhereWithAggregatesInput)
], GroupByRidePassengersArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRidePassengersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRidePassengersArgs.prototype, "skip", void 0);
GroupByRidePassengersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByRidePassengersArgs);
exports.GroupByRidePassengersArgs = GroupByRidePassengersArgs;
