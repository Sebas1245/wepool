"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateOrConnectWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateWithoutUsersInput_1 = require("../inputs/CompanyCreateWithoutUsersInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateOrConnectWithoutUsersInput = class CompanyCreateOrConnectWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateOrConnectWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutUsersInput_1.CompanyCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutUsersInput_1.CompanyCreateWithoutUsersInput)
], CompanyCreateOrConnectWithoutUsersInput.prototype, "create", void 0);
CompanyCreateOrConnectWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateOrConnectWithoutUsersInput", {
        isAbstract: true
    })
], CompanyCreateOrConnectWithoutUsersInput);
exports.CompanyCreateOrConnectWithoutUsersInput = CompanyCreateOrConnectWithoutUsersInput;
