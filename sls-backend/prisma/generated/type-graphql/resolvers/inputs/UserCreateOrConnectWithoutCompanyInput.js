"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutCompanyInput_1 = require("../inputs/UserCreateWithoutCompanyInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutCompanyInput = class UserCreateOrConnectWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCompanyInput_1.UserCreateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCompanyInput_1.UserCreateWithoutCompanyInput)
], UserCreateOrConnectWithoutCompanyInput.prototype, "create", void 0);
UserCreateOrConnectWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutCompanyInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutCompanyInput);
exports.UserCreateOrConnectWithoutCompanyInput = UserCreateOrConnectWithoutCompanyInput;
