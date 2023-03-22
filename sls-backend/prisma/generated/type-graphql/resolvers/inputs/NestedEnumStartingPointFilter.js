"use strict";
var NestedEnumStartingPointFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumStartingPointFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StartingPoint_1 = require("../../enums/StartingPoint");
let NestedEnumStartingPointFilter = NestedEnumStartingPointFilter_1 = class NestedEnumStartingPointFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StartingPoint_1.StartingPoint, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumStartingPointFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StartingPoint_1.StartingPoint], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumStartingPointFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StartingPoint_1.StartingPoint], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumStartingPointFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStartingPointFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStartingPointFilter)
], NestedEnumStartingPointFilter.prototype, "not", void 0);
NestedEnumStartingPointFilter = NestedEnumStartingPointFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumStartingPointFilter", {
        isAbstract: true
    })
], NestedEnumStartingPointFilter);
exports.NestedEnumStartingPointFilter = NestedEnumStartingPointFilter;
