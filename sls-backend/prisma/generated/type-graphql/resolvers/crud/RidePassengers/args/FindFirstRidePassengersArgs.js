"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRidePassengersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersOrderByWithRelationInput_1 = require("../../../inputs/RidePassengersOrderByWithRelationInput");
const RidePassengersWhereInput_1 = require("../../../inputs/RidePassengersWhereInput");
const RidePassengersWhereUniqueInput_1 = require("../../../inputs/RidePassengersWhereUniqueInput");
const RidePassengersScalarFieldEnum_1 = require("../../../../enums/RidePassengersScalarFieldEnum");
let FindFirstRidePassengersArgs = class FindFirstRidePassengersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereInput_1.RidePassengersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereInput_1.RidePassengersWhereInput)
], FindFirstRidePassengersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersOrderByWithRelationInput_1.RidePassengersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRidePassengersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], FindFirstRidePassengersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRidePassengersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRidePassengersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersScalarFieldEnum_1.RidePassengersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRidePassengersArgs.prototype, "distinct", void 0);
FindFirstRidePassengersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstRidePassengersArgs);
exports.FindFirstRidePassengersArgs = FindFirstRidePassengersArgs;
