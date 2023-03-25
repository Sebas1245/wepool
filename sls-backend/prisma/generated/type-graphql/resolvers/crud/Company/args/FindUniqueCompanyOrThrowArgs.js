"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCompanyOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
let FindUniqueCompanyOrThrowArgs = class FindUniqueCompanyOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], FindUniqueCompanyOrThrowArgs.prototype, "where", void 0);
FindUniqueCompanyOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCompanyOrThrowArgs);
exports.FindUniqueCompanyOrThrowArgs = FindUniqueCompanyOrThrowArgs;
