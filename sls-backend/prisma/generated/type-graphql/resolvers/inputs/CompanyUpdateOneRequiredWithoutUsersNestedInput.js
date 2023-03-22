"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateOneRequiredWithoutUsersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateOrConnectWithoutUsersInput_1 = require("../inputs/CompanyCreateOrConnectWithoutUsersInput");
const CompanyCreateWithoutUsersInput_1 = require("../inputs/CompanyCreateWithoutUsersInput");
const CompanyUpdateWithoutUsersInput_1 = require("../inputs/CompanyUpdateWithoutUsersInput");
const CompanyUpsertWithoutUsersInput_1 = require("../inputs/CompanyUpsertWithoutUsersInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyUpdateOneRequiredWithoutUsersNestedInput = class CompanyUpdateOneRequiredWithoutUsersNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutUsersInput_1.CompanyCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutUsersInput_1.CompanyCreateWithoutUsersInput)
], CompanyUpdateOneRequiredWithoutUsersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutUsersInput_1.CompanyCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateOrConnectWithoutUsersInput_1.CompanyCreateOrConnectWithoutUsersInput)
], CompanyUpdateOneRequiredWithoutUsersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpsertWithoutUsersInput_1.CompanyUpsertWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpsertWithoutUsersInput_1.CompanyUpsertWithoutUsersInput)
], CompanyUpdateOneRequiredWithoutUsersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyUpdateOneRequiredWithoutUsersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutUsersInput_1.CompanyUpdateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateWithoutUsersInput_1.CompanyUpdateWithoutUsersInput)
], CompanyUpdateOneRequiredWithoutUsersNestedInput.prototype, "update", void 0);
CompanyUpdateOneRequiredWithoutUsersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyUpdateOneRequiredWithoutUsersNestedInput", {
        isAbstract: true
    })
], CompanyUpdateOneRequiredWithoutUsersNestedInput);
exports.CompanyUpdateOneRequiredWithoutUsersNestedInput = CompanyUpdateOneRequiredWithoutUsersNestedInput;
