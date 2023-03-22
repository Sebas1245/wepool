"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CompanyCreateWithoutUsersInput = class CompanyCreateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutUsersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCreateWithoutUsersInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCreateWithoutUsersInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutUsersInput.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCreateWithoutUsersInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCreateWithoutUsersInput.prototype, "zipCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutUsersInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutUsersInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutUsersInput.prototype, "country", void 0);
CompanyCreateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateWithoutUsersInput", {
        isAbstract: true
    })
], CompanyCreateWithoutUsersInput);
exports.CompanyCreateWithoutUsersInput = CompanyCreateWithoutUsersInput;
