"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRidePassengersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersUpdateManyMutationInput_1 = require("../../../inputs/RidePassengersUpdateManyMutationInput");
const RidePassengersWhereInput_1 = require("../../../inputs/RidePassengersWhereInput");
let UpdateManyRidePassengersArgs = class UpdateManyRidePassengersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersUpdateManyMutationInput_1.RidePassengersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersUpdateManyMutationInput_1.RidePassengersUpdateManyMutationInput)
], UpdateManyRidePassengersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereInput_1.RidePassengersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereInput_1.RidePassengersWhereInput)
], UpdateManyRidePassengersArgs.prototype, "where", void 0);
UpdateManyRidePassengersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRidePassengersArgs);
exports.UpdateManyRidePassengersArgs = UpdateManyRidePassengersArgs;
