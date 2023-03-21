"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarWhereInput_1 = require("../inputs/CarWhereInput");
let CarRelationFilter = class CarRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereInput_1.CarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereInput_1.CarWhereInput)
], CarRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereInput_1.CarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereInput_1.CarWhereInput)
], CarRelationFilter.prototype, "isNot", void 0);
CarRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CarRelationFilter", {
        isAbstract: true
    })
], CarRelationFilter);
exports.CarRelationFilter = CarRelationFilter;
