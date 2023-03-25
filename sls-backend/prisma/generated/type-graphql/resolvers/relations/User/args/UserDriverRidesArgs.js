"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDriverRidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideOrderByWithRelationInput_1 = require("../../../inputs/RideOrderByWithRelationInput");
const RideWhereInput_1 = require("../../../inputs/RideWhereInput");
const RideWhereUniqueInput_1 = require("../../../inputs/RideWhereUniqueInput");
const RideScalarFieldEnum_1 = require("../../../../enums/RideScalarFieldEnum");
let UserDriverRidesArgs = class UserDriverRidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], UserDriverRidesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideOrderByWithRelationInput_1.RideOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserDriverRidesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], UserDriverRidesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserDriverRidesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserDriverRidesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarFieldEnum_1.RideScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserDriverRidesArgs.prototype, "distinct", void 0);
UserDriverRidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserDriverRidesArgs);
exports.UserDriverRidesArgs = UserDriverRidesArgs;
