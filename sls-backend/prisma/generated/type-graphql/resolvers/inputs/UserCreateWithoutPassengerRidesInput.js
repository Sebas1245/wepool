"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutPassengerRidesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateNestedOneWithoutDriverInput_1 = require("../inputs/CarCreateNestedOneWithoutDriverInput");
const CompanyCreateNestedOneWithoutUsersInput_1 = require("../inputs/CompanyCreateNestedOneWithoutUsersInput");
const RideCreateNestedManyWithoutDriverInput_1 = require("../inputs/RideCreateNestedManyWithoutDriverInput");
let UserCreateWithoutPassengerRidesInput = class UserCreateWithoutPassengerRidesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutPassengerRidesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutPassengerRidesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPassengerRidesInput.prototype, "fname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPassengerRidesInput.prototype, "lname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutPassengerRidesInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutPassengerRidesInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPassengerRidesInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutPassengerRidesInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutPassengerRidesInput.prototype, "zipCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPassengerRidesInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPassengerRidesInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPassengerRidesInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPassengerRidesInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutPassengerRidesInput.prototype, "carId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateNestedOneWithoutDriverInput_1.CarCreateNestedOneWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCreateNestedOneWithoutDriverInput_1.CarCreateNestedOneWithoutDriverInput)
], UserCreateWithoutPassengerRidesInput.prototype, "car", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateNestedManyWithoutDriverInput_1.RideCreateNestedManyWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCreateNestedManyWithoutDriverInput_1.RideCreateNestedManyWithoutDriverInput)
], UserCreateWithoutPassengerRidesInput.prototype, "driverRides", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutUsersInput_1.CompanyCreateNestedOneWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateNestedOneWithoutUsersInput_1.CompanyCreateNestedOneWithoutUsersInput)
], UserCreateWithoutPassengerRidesInput.prototype, "company", void 0);
UserCreateWithoutPassengerRidesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutPassengerRidesInput", {
        isAbstract: true
    })
], UserCreateWithoutPassengerRidesInput);
exports.UserCreateWithoutPassengerRidesInput = UserCreateWithoutPassengerRidesInput;
