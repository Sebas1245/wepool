"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCompanyInput_1 = require("../inputs/UserCreateWithoutCompanyInput");
const UserUpdateWithoutCompanyInput_1 = require("../inputs/UserUpdateWithoutCompanyInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutCompanyInput = class UserUpsertWithWhereUniqueWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCompanyInput_1.UserUpdateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCompanyInput_1.UserUpdateWithoutCompanyInput)
], UserUpsertWithWhereUniqueWithoutCompanyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCompanyInput_1.UserCreateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCompanyInput_1.UserCreateWithoutCompanyInput)
], UserUpsertWithWhereUniqueWithoutCompanyInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutCompanyInput);
exports.UserUpsertWithWhereUniqueWithoutCompanyInput = UserUpsertWithWhereUniqueWithoutCompanyInput;
