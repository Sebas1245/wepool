"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutCarInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCarInput_1 = require("../inputs/UserCreateWithoutCarInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutCarInput = class UserCreateOrConnectWithoutCarInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutCarInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCarInput_1.UserCreateWithoutCarInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCarInput_1.UserCreateWithoutCarInput)
], UserCreateOrConnectWithoutCarInput.prototype, "create", void 0);
UserCreateOrConnectWithoutCarInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutCarInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutCarInput);
exports.UserCreateOrConnectWithoutCarInput = UserCreateOrConnectWithoutCarInput;
