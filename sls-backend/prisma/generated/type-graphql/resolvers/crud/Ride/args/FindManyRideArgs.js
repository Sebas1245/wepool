"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRideArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideOrderByWithRelationInput_1 = require("../../../inputs/RideOrderByWithRelationInput");
const RideWhereInput_1 = require("../../../inputs/RideWhereInput");
const RideWhereUniqueInput_1 = require("../../../inputs/RideWhereUniqueInput");
const RideScalarFieldEnum_1 = require("../../../../enums/RideScalarFieldEnum");
let FindManyRideArgs = class FindManyRideArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], FindManyRideArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideOrderByWithRelationInput_1.RideOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyRideArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], FindManyRideArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyRideArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyRideArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarFieldEnum_1.RideScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyRideArgs.prototype, "distinct", void 0);
FindManyRideArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyRideArgs);
exports.FindManyRideArgs = FindManyRideArgs;
