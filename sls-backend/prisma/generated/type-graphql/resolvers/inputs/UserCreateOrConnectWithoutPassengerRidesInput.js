"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutPassengerRidesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPassengerRidesInput_1 = require("../inputs/UserCreateWithoutPassengerRidesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutPassengerRidesInput = class UserCreateOrConnectWithoutPassengerRidesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutPassengerRidesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPassengerRidesInput_1.UserCreateWithoutPassengerRidesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPassengerRidesInput_1.UserCreateWithoutPassengerRidesInput)
], UserCreateOrConnectWithoutPassengerRidesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutPassengerRidesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutPassengerRidesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutPassengerRidesInput);
exports.UserCreateOrConnectWithoutPassengerRidesInput = UserCreateOrConnectWithoutPassengerRidesInput;
