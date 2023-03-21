"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneRidePassengersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateInput_1 = require("../../../inputs/RidePassengersCreateInput");
let CreateOneRidePassengersArgs = class CreateOneRidePassengersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateInput_1.RidePassengersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateInput_1.RidePassengersCreateInput)
], CreateOneRidePassengersArgs.prototype, "data", void 0);
CreateOneRidePassengersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneRidePassengersArgs);
exports.CreateOneRidePassengersArgs = CreateOneRidePassengersArgs;
