"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutDriverRidesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutDriverRidesInput_1 = require("../inputs/UserCreateWithoutDriverRidesInput");
const UserUpdateWithoutDriverRidesInput_1 = require("../inputs/UserUpdateWithoutDriverRidesInput");
let UserUpsertWithoutDriverRidesInput = class UserUpsertWithoutDriverRidesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutDriverRidesInput_1.UserUpdateWithoutDriverRidesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutDriverRidesInput_1.UserUpdateWithoutDriverRidesInput)
], UserUpsertWithoutDriverRidesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutDriverRidesInput_1.UserCreateWithoutDriverRidesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutDriverRidesInput_1.UserCreateWithoutDriverRidesInput)
], UserUpsertWithoutDriverRidesInput.prototype, "create", void 0);
UserUpsertWithoutDriverRidesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutDriverRidesInput", {
        isAbstract: true
    })
], UserUpsertWithoutDriverRidesInput);
exports.UserUpsertWithoutDriverRidesInput = UserUpsertWithoutDriverRidesInput;
