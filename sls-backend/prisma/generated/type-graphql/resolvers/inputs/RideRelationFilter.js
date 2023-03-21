"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideWhereInput_1 = require("../inputs/RideWhereInput");
let RideRelationFilter = class RideRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], RideRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], RideRelationFilter.prototype, "isNot", void 0);
RideRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RideRelationFilter", {
        isAbstract: true
    })
], RideRelationFilter);
exports.RideRelationFilter = RideRelationFilter;
