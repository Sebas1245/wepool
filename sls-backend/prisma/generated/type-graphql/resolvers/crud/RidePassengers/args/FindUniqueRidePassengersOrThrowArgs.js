"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRidePassengersOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersWhereUniqueInput_1 = require("../../../inputs/RidePassengersWhereUniqueInput");
let FindUniqueRidePassengersOrThrowArgs = class FindUniqueRidePassengersOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], FindUniqueRidePassengersOrThrowArgs.prototype, "where", void 0);
FindUniqueRidePassengersOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRidePassengersOrThrowArgs);
exports.FindUniqueRidePassengersOrThrowArgs = FindUniqueRidePassengersOrThrowArgs;
