"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateInput_1 = require("../../../inputs/CompanyCreateInput");
let CreateOneCompanyArgs = class CreateOneCompanyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateInput_1.CompanyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateInput_1.CompanyCreateInput)
], CreateOneCompanyArgs.prototype, "data", void 0);
CreateOneCompanyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCompanyArgs);
exports.CreateOneCompanyArgs = CreateOneCompanyArgs;
