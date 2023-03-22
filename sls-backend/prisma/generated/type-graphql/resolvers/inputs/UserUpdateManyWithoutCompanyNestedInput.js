"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutCompanyNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyCompanyInputEnvelope_1 = require("../inputs/UserCreateManyCompanyInputEnvelope");
const UserCreateOrConnectWithoutCompanyInput_1 = require("../inputs/UserCreateOrConnectWithoutCompanyInput");
const UserCreateWithoutCompanyInput_1 = require("../inputs/UserCreateWithoutCompanyInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutCompanyInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutCompanyInput");
const UserUpdateWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutCompanyInput");
const UserUpsertWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutCompanyInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutCompanyNestedInput = class UserUpdateManyWithoutCompanyNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutCompanyInput_1.UserCreateWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutCompanyInput_1.UserCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutCompanyInput_1.UserUpsertWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateManyCompanyInputEnvelope_1.UserCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateManyCompanyInputEnvelope_1.UserCreateManyCompanyInputEnvelope)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutCompanyInput_1.UserUpdateWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutCompanyInput_1.UserUpdateManyWithWhereWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutCompanyNestedInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutCompanyNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutCompanyNestedInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutCompanyNestedInput);
exports.UserUpdateManyWithoutCompanyNestedInput = UserUpdateManyWithoutCompanyNestedInput;
