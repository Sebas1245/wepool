"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneRideArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideWhereUniqueInput_1 = require("../../../inputs/RideWhereUniqueInput");
let DeleteOneRideArgs = class DeleteOneRideArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], DeleteOneRideArgs.prototype, "where", void 0);
DeleteOneRideArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneRideArgs);
exports.DeleteOneRideArgs = DeleteOneRideArgs;
