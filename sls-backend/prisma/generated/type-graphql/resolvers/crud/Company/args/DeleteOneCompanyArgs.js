"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
let DeleteOneCompanyArgs = class DeleteOneCompanyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], DeleteOneCompanyArgs.prototype, "where", void 0);
DeleteOneCompanyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCompanyArgs);
exports.DeleteOneCompanyArgs = DeleteOneCompanyArgs;
