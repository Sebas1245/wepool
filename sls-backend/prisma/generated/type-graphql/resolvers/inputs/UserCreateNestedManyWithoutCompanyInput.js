"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyCompanyInputEnvelope_1 = require("../inputs/UserCreateManyCompanyInputEnvelope");
const UserCreateOrConnectWithoutCompanyInput_1 = require("../inputs/UserCreateOrConnectWithoutCompanyInput");
const UserCreateWithoutCompanyInput_1 = require("../inputs/UserCreateWithoutCompanyInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutCompanyInput = class UserCreateNestedManyWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutCompanyInput_1.UserCreateWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutCompanyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutCompanyInput_1.UserCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateManyCompanyInputEnvelope_1.UserCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateManyCompanyInputEnvelope_1.UserCreateManyCompanyInputEnvelope)
], UserCreateNestedManyWithoutCompanyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateNestedManyWithoutCompanyInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutCompanyInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutCompanyInput);
exports.UserCreateNestedManyWithoutCompanyInput = UserCreateNestedManyWithoutCompanyInput;
