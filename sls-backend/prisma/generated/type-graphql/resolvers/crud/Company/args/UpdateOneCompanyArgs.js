"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyUpdateInput_1 = require("../../../inputs/CompanyUpdateInput");
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
let UpdateOneCompanyArgs = class UpdateOneCompanyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateInput_1.CompanyUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyUpdateInput_1.CompanyUpdateInput)
], UpdateOneCompanyArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], UpdateOneCompanyArgs.prototype, "where", void 0);
UpdateOneCompanyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCompanyArgs);
exports.UpdateOneCompanyArgs = UpdateOneCompanyArgs;
