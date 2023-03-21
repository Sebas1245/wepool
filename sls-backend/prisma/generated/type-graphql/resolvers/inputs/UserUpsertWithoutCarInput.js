"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutCarInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCarInput_1 = require("../inputs/UserCreateWithoutCarInput");
const UserUpdateWithoutCarInput_1 = require("../inputs/UserUpdateWithoutCarInput");
let UserUpsertWithoutCarInput = class UserUpsertWithoutCarInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCarInput_1.UserUpdateWithoutCarInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCarInput_1.UserUpdateWithoutCarInput)
], UserUpsertWithoutCarInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCarInput_1.UserCreateWithoutCarInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCarInput_1.UserCreateWithoutCarInput)
], UserUpsertWithoutCarInput.prototype, "create", void 0);
UserUpsertWithoutCarInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutCarInput", {
        isAbstract: true
    })
], UserUpsertWithoutCarInput);
exports.UserUpsertWithoutCarInput = UserUpsertWithoutCarInput;
