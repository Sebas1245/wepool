"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRidePassengersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersWhereInput_1 = require("../../../inputs/RidePassengersWhereInput");
let DeleteManyRidePassengersArgs = class DeleteManyRidePassengersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereInput_1.RidePassengersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereInput_1.RidePassengersWhereInput)
], DeleteManyRidePassengersArgs.prototype, "where", void 0);
DeleteManyRidePassengersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRidePassengersArgs);
exports.DeleteManyRidePassengersArgs = DeleteManyRidePassengersArgs;
