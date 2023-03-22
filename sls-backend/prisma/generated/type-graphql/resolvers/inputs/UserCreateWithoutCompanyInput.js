"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateNestedOneWithoutDriverInput_1 = require("../inputs/CarCreateNestedOneWithoutDriverInput");
const RideCreateNestedManyWithoutDriverInput_1 = require("../inputs/RideCreateNestedManyWithoutDriverInput");
const RidePassengersCreateNestedManyWithoutPassengerInput_1 = require("../inputs/RidePassengersCreateNestedManyWithoutPassengerInput");
let UserCreateWithoutCompanyInput = class UserCreateWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutCompanyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutCompanyInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCompanyInput.prototype, "fname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCompanyInput.prototype, "lname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutCompanyInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutCompanyInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCompanyInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutCompanyInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutCompanyInput.prototype, "zipCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCompanyInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCompanyInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutCompanyInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutCompanyInput.prototype, "carId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateNestedOneWithoutDriverInput_1.CarCreateNestedOneWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCreateNestedOneWithoutDriverInput_1.CarCreateNestedOneWithoutDriverInput)
], UserCreateWithoutCompanyInput.prototype, "car", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateNestedManyWithoutDriverInput_1.RideCreateNestedManyWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCreateNestedManyWithoutDriverInput_1.RideCreateNestedManyWithoutDriverInput)
], UserCreateWithoutCompanyInput.prototype, "driverRides", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateNestedManyWithoutPassengerInput_1.RidePassengersCreateNestedManyWithoutPassengerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateNestedManyWithoutPassengerInput_1.RidePassengersCreateNestedManyWithoutPassengerInput)
], UserCreateWithoutCompanyInput.prototype, "passengerRides", void 0);
UserCreateWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutCompanyInput", {
        isAbstract: true
    })
], UserCreateWithoutCompanyInput);
exports.UserCreateWithoutCompanyInput = UserCreateWithoutCompanyInput;
