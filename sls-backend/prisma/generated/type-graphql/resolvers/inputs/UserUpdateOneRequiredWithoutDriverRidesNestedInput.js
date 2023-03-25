"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutDriverRidesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutDriverRidesInput_1 = require("../inputs/UserCreateOrConnectWithoutDriverRidesInput");
const UserCreateWithoutDriverRidesInput_1 = require("../inputs/UserCreateWithoutDriverRidesInput");
const UserUpdateWithoutDriverRidesInput_1 = require("../inputs/UserUpdateWithoutDriverRidesInput");
const UserUpsertWithoutDriverRidesInput_1 = require("../inputs/UserUpsertWithoutDriverRidesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutDriverRidesNestedInput = class UserUpdateOneRequiredWithoutDriverRidesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutDriverRidesInput_1.UserCreateWithoutDriverRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutDriverRidesInput_1.UserCreateWithoutDriverRidesInput)
], UserUpdateOneRequiredWithoutDriverRidesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDriverRidesInput_1.UserCreateOrConnectWithoutDriverRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutDriverRidesInput_1.UserCreateOrConnectWithoutDriverRidesInput)
], UserUpdateOneRequiredWithoutDriverRidesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutDriverRidesInput_1.UserUpsertWithoutDriverRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutDriverRidesInput_1.UserUpsertWithoutDriverRidesInput)
], UserUpdateOneRequiredWithoutDriverRidesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutDriverRidesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutDriverRidesInput_1.UserUpdateWithoutDriverRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutDriverRidesInput_1.UserUpdateWithoutDriverRidesInput)
], UserUpdateOneRequiredWithoutDriverRidesNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutDriverRidesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutDriverRidesNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutDriverRidesNestedInput);
exports.UserUpdateOneRequiredWithoutDriverRidesNestedInput = UserUpdateOneRequiredWithoutDriverRidesNestedInput;
