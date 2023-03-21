"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutCarInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCarInput_1 = require("../inputs/UserCreateOrConnectWithoutCarInput");
const UserCreateWithoutCarInput_1 = require("../inputs/UserCreateWithoutCarInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutCarInput = class UserCreateNestedOneWithoutCarInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCarInput_1.UserCreateWithoutCarInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCarInput_1.UserCreateWithoutCarInput)
], UserCreateNestedOneWithoutCarInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCarInput_1.UserCreateOrConnectWithoutCarInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCarInput_1.UserCreateOrConnectWithoutCarInput)
], UserCreateNestedOneWithoutCarInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutCarInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutCarInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutCarInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutCarInput);
exports.UserCreateNestedOneWithoutCarInput = UserCreateNestedOneWithoutCarInput;
