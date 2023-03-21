"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateNestedManyWithoutRideInput_1 = require("../inputs/RidePassengersCreateNestedManyWithoutRideInput");
const UserCreateNestedOneWithoutDriverRidesInput_1 = require("../inputs/UserCreateNestedOneWithoutDriverRidesInput");
const RideStatus_1 = require("../../enums/RideStatus");
let RideCreateInput = class RideCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCreateInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCreateInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RideCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDriverRidesInput_1.UserCreateNestedOneWithoutDriverRidesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutDriverRidesInput_1.UserCreateNestedOneWithoutDriverRidesInput)
], RideCreateInput.prototype, "driver", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateNestedManyWithoutRideInput_1.RidePassengersCreateNestedManyWithoutRideInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateNestedManyWithoutRideInput_1.RidePassengersCreateNestedManyWithoutRideInput)
], RideCreateInput.prototype, "passengers", void 0);
RideCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideCreateInput", {
        isAbstract: true
    })
], RideCreateInput);
exports.RideCreateInput = RideCreateInput;
