"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutDriverRidesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateNestedOneWithoutDriverInput_1 = require("../inputs/CarCreateNestedOneWithoutDriverInput");
const CompanyCreateNestedOneWithoutUsersInput_1 = require("../inputs/CompanyCreateNestedOneWithoutUsersInput");
const RidePassengersCreateNestedManyWithoutPassengerInput_1 = require("../inputs/RidePassengersCreateNestedManyWithoutPassengerInput");
let UserCreateWithoutDriverRidesInput = class UserCreateWithoutDriverRidesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutDriverRidesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutDriverRidesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutDriverRidesInput.prototype, "fname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutDriverRidesInput.prototype, "lname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutDriverRidesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutDriverRidesInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutDriverRidesInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutDriverRidesInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutDriverRidesInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutDriverRidesInput.prototype, "zipCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutDriverRidesInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutDriverRidesInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutDriverRidesInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutDriverRidesInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutDriverRidesInput.prototype, "carId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateNestedOneWithoutDriverInput_1.CarCreateNestedOneWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCreateNestedOneWithoutDriverInput_1.CarCreateNestedOneWithoutDriverInput)
], UserCreateWithoutDriverRidesInput.prototype, "car", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateNestedManyWithoutPassengerInput_1.RidePassengersCreateNestedManyWithoutPassengerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateNestedManyWithoutPassengerInput_1.RidePassengersCreateNestedManyWithoutPassengerInput)
], UserCreateWithoutDriverRidesInput.prototype, "passengerRides", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutUsersInput_1.CompanyCreateNestedOneWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateNestedOneWithoutUsersInput_1.CompanyCreateNestedOneWithoutUsersInput)
], UserCreateWithoutDriverRidesInput.prototype, "company", void 0);
UserCreateWithoutDriverRidesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutDriverRidesInput", {
        isAbstract: true
    })
], UserCreateWithoutDriverRidesInput);
exports.UserCreateWithoutDriverRidesInput = UserCreateWithoutDriverRidesInput;
