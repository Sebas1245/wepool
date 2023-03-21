"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRideArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideUpdateManyMutationInput_1 = require("../../../inputs/RideUpdateManyMutationInput");
const RideWhereInput_1 = require("../../../inputs/RideWhereInput");
let UpdateManyRideArgs = class UpdateManyRideArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideUpdateManyMutationInput_1.RideUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideUpdateManyMutationInput_1.RideUpdateManyMutationInput)
], UpdateManyRideArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], UpdateManyRideArgs.prototype, "where", void 0);
UpdateManyRideArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRideArgs);
exports.UpdateManyRideArgs = UpdateManyRideArgs;
