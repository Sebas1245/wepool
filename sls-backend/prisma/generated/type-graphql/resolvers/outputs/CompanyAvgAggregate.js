"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CompanyAvgAggregate = class CompanyAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyAvgAggregate.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyAvgAggregate.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyAvgAggregate.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyAvgAggregate.prototype, "zipCode", void 0);
CompanyAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CompanyAvgAggregate", {
        isAbstract: true
    })
], CompanyAvgAggregate);
exports.CompanyAvgAggregate = CompanyAvgAggregate;
