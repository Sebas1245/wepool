"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutDriverRidesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarUpdateOneWithoutDriverNestedInput_1 = require("../inputs/CarUpdateOneWithoutDriverNestedInput");
const CompanyUpdateOneRequiredWithoutUsersNestedInput_1 = require("../inputs/CompanyUpdateOneRequiredWithoutUsersNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableFloatFieldUpdateOperationsInput_1 = require("../inputs/NullableFloatFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RidePassengersUpdateManyWithoutPassengerNestedInput_1 = require("../inputs/RidePassengersUpdateManyWithoutPassengerNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutDriverRidesInput = class UserUpdateWithoutDriverRidesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "fname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "lname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "zipCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], UserUpdateWithoutDriverRidesInput.prototype, "carId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarUpdateOneWithoutDriverNestedInput_1.CarUpdateOneWithoutDriverNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarUpdateOneWithoutDriverNestedInput_1.CarUpdateOneWithoutDriverNestedInput)
], UserUpdateWithoutDriverRidesInput.prototype, "car", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersUpdateManyWithoutPassengerNestedInput_1.RidePassengersUpdateManyWithoutPassengerNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersUpdateManyWithoutPassengerNestedInput_1.RidePassengersUpdateManyWithoutPassengerNestedInput)
], UserUpdateWithoutDriverRidesInput.prototype, "passengerRides", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutUsersNestedInput_1.CompanyUpdateOneRequiredWithoutUsersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateOneRequiredWithoutUsersNestedInput_1.CompanyUpdateOneRequiredWithoutUsersNestedInput)
], UserUpdateWithoutDriverRidesInput.prototype, "company", void 0);
UserUpdateWithoutDriverRidesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutDriverRidesInput", {
        isAbstract: true
    })
], UserUpdateWithoutDriverRidesInput);
exports.UserUpdateWithoutDriverRidesInput = UserUpdateWithoutDriverRidesInput;
