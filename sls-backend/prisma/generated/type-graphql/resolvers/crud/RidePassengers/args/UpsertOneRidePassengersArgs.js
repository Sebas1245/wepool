"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRidePassengersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateInput_1 = require("../../../inputs/RidePassengersCreateInput");
const RidePassengersUpdateInput_1 = require("../../../inputs/RidePassengersUpdateInput");
const RidePassengersWhereUniqueInput_1 = require("../../../inputs/RidePassengersWhereUniqueInput");
let UpsertOneRidePassengersArgs = class UpsertOneRidePassengersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], UpsertOneRidePassengersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateInput_1.RidePassengersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateInput_1.RidePassengersCreateInput)
], UpsertOneRidePassengersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersUpdateInput_1.RidePassengersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersUpdateInput_1.RidePassengersUpdateInput)
], UpsertOneRidePassengersArgs.prototype, "update", void 0);
UpsertOneRidePassengersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneRidePassengersArgs);
exports.UpsertOneRidePassengersArgs = UpsertOneRidePassengersArgs;
