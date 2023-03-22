"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumStartingPointFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumStartingPointFilter_1 = require("../inputs/NestedEnumStartingPointFilter");
const StartingPoint_1 = require("../../enums/StartingPoint");
let EnumStartingPointFilter = class EnumStartingPointFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StartingPoint_1.StartingPoint, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumStartingPointFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StartingPoint_1.StartingPoint], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumStartingPointFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StartingPoint_1.StartingPoint], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumStartingPointFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStartingPointFilter_1.NestedEnumStartingPointFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStartingPointFilter_1.NestedEnumStartingPointFilter)
], EnumStartingPointFilter.prototype, "not", void 0);
EnumStartingPointFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumStartingPointFilter", {
        isAbstract: true
    })
], EnumStartingPointFilter);
exports.EnumStartingPointFilter = EnumStartingPointFilter;
