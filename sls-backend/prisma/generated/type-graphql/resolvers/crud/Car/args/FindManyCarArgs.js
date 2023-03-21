"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarOrderByWithRelationInput_1 = require("../../../inputs/CarOrderByWithRelationInput");
const CarWhereInput_1 = require("../../../inputs/CarWhereInput");
const CarWhereUniqueInput_1 = require("../../../inputs/CarWhereUniqueInput");
const CarScalarFieldEnum_1 = require("../../../../enums/CarScalarFieldEnum");
let FindManyCarArgs = class FindManyCarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereInput_1.CarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereInput_1.CarWhereInput)
], FindManyCarArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CarOrderByWithRelationInput_1.CarOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCarArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereUniqueInput_1.CarWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereUniqueInput_1.CarWhereUniqueInput)
], FindManyCarArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCarArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCarArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CarScalarFieldEnum_1.CarScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCarArgs.prototype, "distinct", void 0);
FindManyCarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCarArgs);
exports.FindManyCarArgs = FindManyCarArgs;
