"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarOrderByWithAggregationInput_1 = require("../../../inputs/CarOrderByWithAggregationInput");
const CarScalarWhereWithAggregatesInput_1 = require("../../../inputs/CarScalarWhereWithAggregatesInput");
const CarWhereInput_1 = require("../../../inputs/CarWhereInput");
const CarScalarFieldEnum_1 = require("../../../../enums/CarScalarFieldEnum");
let GroupByCarArgs = class GroupByCarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereInput_1.CarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereInput_1.CarWhereInput)
], GroupByCarArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CarOrderByWithAggregationInput_1.CarOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCarArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CarScalarFieldEnum_1.CarScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCarArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarScalarWhereWithAggregatesInput_1.CarScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarScalarWhereWithAggregatesInput_1.CarScalarWhereWithAggregatesInput)
], GroupByCarArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCarArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCarArgs.prototype, "skip", void 0);
GroupByCarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCarArgs);
exports.GroupByCarArgs = GroupByCarArgs;
