"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CompanyCount = class CompanyCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCount.prototype, "users", void 0);
CompanyCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CompanyCount", {
        isAbstract: true
    })
], CompanyCount);
exports.CompanyCount = CompanyCount;
