"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRidePassengersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersUpdateInput_1 = require("../../../inputs/RidePassengersUpdateInput");
const RidePassengersWhereUniqueInput_1 = require("../../../inputs/RidePassengersWhereUniqueInput");
let UpdateOneRidePassengersArgs = class UpdateOneRidePassengersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersUpdateInput_1.RidePassengersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersUpdateInput_1.RidePassengersUpdateInput)
], UpdateOneRidePassengersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput)
], UpdateOneRidePassengersArgs.prototype, "where", void 0);
UpdateOneRidePassengersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneRidePassengersArgs);
exports.UpdateOneRidePassengersArgs = UpdateOneRidePassengersArgs;
