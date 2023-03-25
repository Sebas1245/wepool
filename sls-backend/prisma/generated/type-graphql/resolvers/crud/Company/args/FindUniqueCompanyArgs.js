"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
let FindUniqueCompanyArgs = class FindUniqueCompanyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], FindUniqueCompanyArgs.prototype, "where", void 0);
FindUniqueCompanyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCompanyArgs);
exports.FindUniqueCompanyArgs = FindUniqueCompanyArgs;
