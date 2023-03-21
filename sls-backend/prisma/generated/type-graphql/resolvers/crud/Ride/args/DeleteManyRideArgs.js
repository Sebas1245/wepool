"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRideArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideWhereInput_1 = require("../../../inputs/RideWhereInput");
let DeleteManyRideArgs = class DeleteManyRideArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], DeleteManyRideArgs.prototype, "where", void 0);
DeleteManyRideArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRideArgs);
exports.DeleteManyRideArgs = DeleteManyRideArgs;
