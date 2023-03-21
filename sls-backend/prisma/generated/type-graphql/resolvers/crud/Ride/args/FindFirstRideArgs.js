"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRideArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideOrderByWithRelationInput_1 = require("../../../inputs/RideOrderByWithRelationInput");
const RideWhereInput_1 = require("../../../inputs/RideWhereInput");
const RideWhereUniqueInput_1 = require("../../../inputs/RideWhereUniqueInput");
const RideScalarFieldEnum_1 = require("../../../../enums/RideScalarFieldEnum");
let FindFirstRideArgs = class FindFirstRideArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], FindFirstRideArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideOrderByWithRelationInput_1.RideOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRideArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], FindFirstRideArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRideArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRideArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarFieldEnum_1.RideScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRideArgs.prototype, "distinct", void 0);
FindFirstRideArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstRideArgs);
exports.FindFirstRideArgs = FindFirstRideArgs;
