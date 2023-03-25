"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CompanyWhereUniqueInput = class CompanyWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyWhereUniqueInput.prototype, "id", void 0);
CompanyWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyWhereUniqueInput", {
        isAbstract: true
    })
], CompanyWhereUniqueInput);
exports.CompanyWhereUniqueInput = CompanyWhereUniqueInput;
