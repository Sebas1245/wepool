"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutDriverRidesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutDriverRidesInput_1 = require("../inputs/UserCreateOrConnectWithoutDriverRidesInput");
const UserCreateWithoutDriverRidesInput_1 = require("../inputs/UserCreateWithoutDriverRidesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutDriverRidesInput = class UserCreateNestedOneWithoutDriverRidesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutDriverRidesInput_1.UserCreateWithoutDriverRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutDriverRidesInput_1.UserCreateWithoutDriverRidesInput)
], UserCreateNestedOneWithoutDriverRidesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDriverRidesInput_1.UserCreateOrConnectWithoutDriverRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutDriverRidesInput_1.UserCreateOrConnectWithoutDriverRidesInput)
], UserCreateNestedOneWithoutDriverRidesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutDriverRidesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutDriverRidesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutDriverRidesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutDriverRidesInput);
exports.UserCreateNestedOneWithoutDriverRidesInput = UserCreateNestedOneWithoutDriverRidesInput;
