"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutCarNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCarInput_1 = require("../inputs/UserCreateOrConnectWithoutCarInput");
const UserCreateWithoutCarInput_1 = require("../inputs/UserCreateWithoutCarInput");
const UserUpdateWithoutCarInput_1 = require("../inputs/UserUpdateWithoutCarInput");
const UserUpsertWithoutCarInput_1 = require("../inputs/UserUpsertWithoutCarInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutCarNestedInput = class UserUpdateOneRequiredWithoutCarNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCarInput_1.UserCreateWithoutCarInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCarInput_1.UserCreateWithoutCarInput)
], UserUpdateOneRequiredWithoutCarNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCarInput_1.UserCreateOrConnectWithoutCarInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCarInput_1.UserCreateOrConnectWithoutCarInput)
], UserUpdateOneRequiredWithoutCarNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutCarInput_1.UserUpsertWithoutCarInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutCarInput_1.UserUpsertWithoutCarInput)
], UserUpdateOneRequiredWithoutCarNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutCarNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCarInput_1.UserUpdateWithoutCarInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCarInput_1.UserUpdateWithoutCarInput)
], UserUpdateOneRequiredWithoutCarNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutCarNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCarNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutCarNestedInput);
exports.UserUpdateOneRequiredWithoutCarNestedInput = UserUpdateOneRequiredWithoutCarNestedInput;
