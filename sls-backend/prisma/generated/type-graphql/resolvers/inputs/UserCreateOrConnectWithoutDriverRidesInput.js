"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutDriverRidesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutDriverRidesInput_1 = require("../inputs/UserCreateWithoutDriverRidesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutDriverRidesInput = class UserCreateOrConnectWithoutDriverRidesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutDriverRidesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutDriverRidesInput_1.UserCreateWithoutDriverRidesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutDriverRidesInput_1.UserCreateWithoutDriverRidesInput)
], UserCreateOrConnectWithoutDriverRidesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutDriverRidesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutDriverRidesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutDriverRidesInput);
exports.UserCreateOrConnectWithoutDriverRidesInput = UserCreateOrConnectWithoutDriverRidesInput;
