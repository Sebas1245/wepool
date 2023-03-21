"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutPassengerRidesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPassengerRidesInput_1 = require("../inputs/UserCreateWithoutPassengerRidesInput");
const UserUpdateWithoutPassengerRidesInput_1 = require("../inputs/UserUpdateWithoutPassengerRidesInput");
let UserUpsertWithoutPassengerRidesInput = class UserUpsertWithoutPassengerRidesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPassengerRidesInput_1.UserUpdateWithoutPassengerRidesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPassengerRidesInput_1.UserUpdateWithoutPassengerRidesInput)
], UserUpsertWithoutPassengerRidesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPassengerRidesInput_1.UserCreateWithoutPassengerRidesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPassengerRidesInput_1.UserCreateWithoutPassengerRidesInput)
], UserUpsertWithoutPassengerRidesInput.prototype, "create", void 0);
UserUpsertWithoutPassengerRidesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutPassengerRidesInput", {
        isAbstract: true
    })
], UserUpsertWithoutPassengerRidesInput);
exports.UserUpsertWithoutPassengerRidesInput = UserUpsertWithoutPassengerRidesInput;
