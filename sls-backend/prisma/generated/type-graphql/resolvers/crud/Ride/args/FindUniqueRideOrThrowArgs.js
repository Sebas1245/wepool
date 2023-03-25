"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRideOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideWhereUniqueInput_1 = require("../../../inputs/RideWhereUniqueInput");
let FindUniqueRideOrThrowArgs = class FindUniqueRideOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], FindUniqueRideOrThrowArgs.prototype, "where", void 0);
FindUniqueRideOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRideOrThrowArgs);
exports.FindUniqueRideOrThrowArgs = FindUniqueRideOrThrowArgs;
