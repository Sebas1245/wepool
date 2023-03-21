"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRideArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideWhereUniqueInput_1 = require("../../../inputs/RideWhereUniqueInput");
let FindUniqueRideArgs = class FindUniqueRideArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], FindUniqueRideArgs.prototype, "where", void 0);
FindUniqueRideArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRideArgs);
exports.FindUniqueRideArgs = FindUniqueRideArgs;
