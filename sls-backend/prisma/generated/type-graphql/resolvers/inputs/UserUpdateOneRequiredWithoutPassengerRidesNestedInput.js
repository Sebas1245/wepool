"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutPassengerRidesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPassengerRidesInput_1 = require("../inputs/UserCreateOrConnectWithoutPassengerRidesInput");
const UserCreateWithoutPassengerRidesInput_1 = require("../inputs/UserCreateWithoutPassengerRidesInput");
const UserUpdateWithoutPassengerRidesInput_1 = require("../inputs/UserUpdateWithoutPassengerRidesInput");
const UserUpsertWithoutPassengerRidesInput_1 = require("../inputs/UserUpsertWithoutPassengerRidesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutPassengerRidesNestedInput = class UserUpdateOneRequiredWithoutPassengerRidesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPassengerRidesInput_1.UserCreateWithoutPassengerRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPassengerRidesInput_1.UserCreateWithoutPassengerRidesInput)
], UserUpdateOneRequiredWithoutPassengerRidesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPassengerRidesInput_1.UserCreateOrConnectWithoutPassengerRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPassengerRidesInput_1.UserCreateOrConnectWithoutPassengerRidesInput)
], UserUpdateOneRequiredWithoutPassengerRidesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutPassengerRidesInput_1.UserUpsertWithoutPassengerRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutPassengerRidesInput_1.UserUpsertWithoutPassengerRidesInput)
], UserUpdateOneRequiredWithoutPassengerRidesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutPassengerRidesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPassengerRidesInput_1.UserUpdateWithoutPassengerRidesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPassengerRidesInput_1.UserUpdateWithoutPassengerRidesInput)
], UserUpdateOneRequiredWithoutPassengerRidesNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutPassengerRidesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPassengerRidesNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutPassengerRidesNestedInput);
exports.UserUpdateOneRequiredWithoutPassengerRidesNestedInput = UserUpdateOneRequiredWithoutPassengerRidesNestedInput;
