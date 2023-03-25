"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarOrderByWithRelationInput_1 = require("../../../inputs/CarOrderByWithRelationInput");
const CarWhereInput_1 = require("../../../inputs/CarWhereInput");
const CarWhereUniqueInput_1 = require("../../../inputs/CarWhereUniqueInput");
let AggregateCarArgs = class AggregateCarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereInput_1.CarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereInput_1.CarWhereInput)
], AggregateCarArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CarOrderByWithRelationInput_1.CarOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCarArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereUniqueInput_1.CarWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereUniqueInput_1.CarWhereUniqueInput)
], AggregateCarArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCarArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCarArgs.prototype, "skip", void 0);
AggregateCarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCarArgs);
exports.AggregateCarArgs = AggregateCarArgs;
