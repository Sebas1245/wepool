"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutPassengerRidesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPassengerRidesInput_1 = require("../inputs/UserCreateOrConnectWithoutPassengerRidesInput");
const UserCreateWithoutPassengerRidesInput_1 = require("../inputs/UserCreateWithoutPassengerRidesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutPassengerRidesInput = class UserCreateNestedOneWithoutPassengerRidesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPassengerRidesInput_1.UserCreateWithoutPassengerRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPassengerRidesInput_1.UserCreateWithoutPassengerRidesInput)
], UserCreateNestedOneWithoutPassengerRidesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPassengerRidesInput_1.UserCreateOrConnectWithoutPassengerRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPassengerRidesInput_1.UserCreateOrConnectWithoutPassengerRidesInput)
], UserCreateNestedOneWithoutPassengerRidesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutPassengerRidesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutPassengerRidesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutPassengerRidesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutPassengerRidesInput);
exports.UserCreateNestedOneWithoutPassengerRidesInput = UserCreateNestedOneWithoutPassengerRidesInput;
