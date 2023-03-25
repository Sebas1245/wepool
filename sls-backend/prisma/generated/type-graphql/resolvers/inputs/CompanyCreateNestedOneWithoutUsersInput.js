"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateNestedOneWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateOrConnectWithoutUsersInput_1 = require("../inputs/CompanyCreateOrConnectWithoutUsersInput");
const CompanyCreateWithoutUsersInput_1 = require("../inputs/CompanyCreateWithoutUsersInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateNestedOneWithoutUsersInput = class CompanyCreateNestedOneWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutUsersInput_1.CompanyCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutUsersInput_1.CompanyCreateWithoutUsersInput)
], CompanyCreateNestedOneWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutUsersInput_1.CompanyCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateOrConnectWithoutUsersInput_1.CompanyCreateOrConnectWithoutUsersInput)
], CompanyCreateNestedOneWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateNestedOneWithoutUsersInput.prototype, "connect", void 0);
CompanyCreateNestedOneWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateNestedOneWithoutUsersInput", {
        isAbstract: true
    })
], CompanyCreateNestedOneWithoutUsersInput);
exports.CompanyCreateNestedOneWithoutUsersInput = CompanyCreateNestedOneWithoutUsersInput;
