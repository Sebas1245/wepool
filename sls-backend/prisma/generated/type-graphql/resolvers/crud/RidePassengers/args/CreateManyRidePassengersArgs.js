"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRidePassengersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateManyInput_1 = require("../../../inputs/RidePassengersCreateManyInput");
let CreateManyRidePassengersArgs = class CreateManyRidePassengersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateManyInput_1.RidePassengersCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyRidePassengersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyRidePassengersArgs.prototype, "skipDuplicates", void 0);
CreateManyRidePassengersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyRidePassengersArgs);
exports.CreateManyRidePassengersArgs = CreateManyRidePassengersArgs;
