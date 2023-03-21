"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyAvgAggregate_1 = require("../outputs/CompanyAvgAggregate");
const CompanyCountAggregate_1 = require("../outputs/CompanyCountAggregate");
const CompanyMaxAggregate_1 = require("../outputs/CompanyMaxAggregate");
const CompanyMinAggregate_1 = require("../outputs/CompanyMinAggregate");
const CompanySumAggregate_1 = require("../outputs/CompanySumAggregate");
let CompanyGroupBy = class CompanyGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyGroupBy.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyGroupBy.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyGroupBy.prototype, "street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyGroupBy.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyGroupBy.prototype, "zipCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCountAggregate_1.CompanyCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCountAggregate_1.CompanyCountAggregate)
], CompanyGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyAvgAggregate_1.CompanyAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyAvgAggregate_1.CompanyAvgAggregate)
], CompanyGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanySumAggregate_1.CompanySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanySumAggregate_1.CompanySumAggregate)
], CompanyGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyMinAggregate_1.CompanyMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyMinAggregate_1.CompanyMinAggregate)
], CompanyGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyMaxAggregate_1.CompanyMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyMaxAggregate_1.CompanyMaxAggregate)
], CompanyGroupBy.prototype, "_max", void 0);
CompanyGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CompanyGroupBy", {
        isAbstract: true
    })
], CompanyGroupBy);
exports.CompanyGroupBy = CompanyGroupBy;
