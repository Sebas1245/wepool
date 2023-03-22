"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutCompanyInput_1 = require("../inputs/UserUpdateWithoutCompanyInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutCompanyInput = class UserUpdateWithWhereUniqueWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCompanyInput_1.UserUpdateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCompanyInput_1.UserUpdateWithoutCompanyInput)
], UserUpdateWithWhereUniqueWithoutCompanyInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutCompanyInput);
exports.UserUpdateWithWhereUniqueWithoutCompanyInput = UserUpdateWithWhereUniqueWithoutCompanyInput;
