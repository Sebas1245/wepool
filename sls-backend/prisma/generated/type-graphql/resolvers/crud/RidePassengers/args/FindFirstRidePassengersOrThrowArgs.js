"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRidePassengersOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersOrderByWithRelationInput_1 = require("../../../inputs/RidePassengersOrderByWithRelationInput");
const RidePassengersWhereInput_1 = require("../../../inputs/RidePassengersWhereInput");
const RidePassengersWhereUniqueInput_1 = require("../../../inputs/RidePassengersWhereUniqueInput");
const RidePassengersScalarFieldEnum_1 = require("../../../../enums/RidePassengersScalarFieldEnum");
let FindFirstRidePassengersOrThrowArgs = class FindFirstRidePassengersOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereInput_1.RidePassengersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereInput_1.RidePassengersWhereInput)
], FindFirstRidePassengersOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersOrderByWithRelationInput_1.RidePassengersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRidePassengersOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], FindFirstRidePassengersOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRidePassengersOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRidePassengersOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersScalarFieldEnum_1.RidePassengersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRidePassengersOrThrowArgs.prototype, "distinct", void 0);
FindFirstRidePassengersOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstRidePassengersOrThrowArgs);
exports.FindFirstRidePassengersOrThrowArgs = FindFirstRidePassengersOrThrowArgs;
