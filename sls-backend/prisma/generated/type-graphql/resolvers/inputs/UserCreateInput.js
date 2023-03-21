"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateNestedOneWithoutDriverInput_1 = require("../inputs/CarCreateNestedOneWithoutDriverInput");
const RideCreateNestedManyWithoutDriverInput_1 = require("../inputs/RideCreateNestedManyWithoutDriverInput");
const RidePassengersCreateNestedManyWithoutPassengerInput_1 = require("../inputs/RidePassengersCreateNestedManyWithoutPassengerInput");
let UserCreateInput = class UserCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "fname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "lname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateInput.prototype, "zipCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateNestedOneWithoutDriverInput_1.CarCreateNestedOneWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCreateNestedOneWithoutDriverInput_1.CarCreateNestedOneWithoutDriverInput)
], UserCreateInput.prototype, "car", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateNestedManyWithoutDriverInput_1.RideCreateNestedManyWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCreateNestedManyWithoutDriverInput_1.RideCreateNestedManyWithoutDriverInput)
], UserCreateInput.prototype, "driverRides", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateNestedManyWithoutPassengerInput_1.RidePassengersCreateNestedManyWithoutPassengerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateNestedManyWithoutPassengerInput_1.RidePassengersCreateNestedManyWithoutPassengerInput)
], UserCreateInput.prototype, "passengerRides", void 0);
UserCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateInput", {
        isAbstract: true
    })
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
