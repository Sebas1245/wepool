"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutCarInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateNestedOneWithoutUsersInput_1 = require("../inputs/CompanyCreateNestedOneWithoutUsersInput");
const RideCreateNestedManyWithoutDriverInput_1 = require("../inputs/RideCreateNestedManyWithoutDriverInput");
const RidePassengersCreateNestedManyWithoutPassengerInput_1 = require("../inputs/RidePassengersCreateNestedManyWithoutPassengerInput");
let UserCreateWithoutCarInput = class UserCreateWithoutCarInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutCarInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutCarInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCarInput.prototype, "fname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCarInput.prototype, "lname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutCarInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutCarInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCarInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutCarInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutCarInput.prototype, "zipCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCarInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCarInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCarInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCarInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutCarInput.prototype, "carId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateNestedManyWithoutDriverInput_1.RideCreateNestedManyWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCreateNestedManyWithoutDriverInput_1.RideCreateNestedManyWithoutDriverInput)
], UserCreateWithoutCarInput.prototype, "driverRides", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateNestedManyWithoutPassengerInput_1.RidePassengersCreateNestedManyWithoutPassengerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateNestedManyWithoutPassengerInput_1.RidePassengersCreateNestedManyWithoutPassengerInput)
], UserCreateWithoutCarInput.prototype, "passengerRides", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutUsersInput_1.CompanyCreateNestedOneWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateNestedOneWithoutUsersInput_1.CompanyCreateNestedOneWithoutUsersInput)
], UserCreateWithoutCarInput.prototype, "company", void 0);
UserCreateWithoutCarInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutCarInput", {
        isAbstract: true
    })
], UserCreateWithoutCarInput);
exports.UserCreateWithoutCarInput = UserCreateWithoutCarInput;
