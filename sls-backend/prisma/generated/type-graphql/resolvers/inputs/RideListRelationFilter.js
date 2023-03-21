"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideWhereInput_1 = require("../inputs/RideWhereInput");
let RideListRelationFilter = class RideListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], RideListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], RideListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereInput_1.RideWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereInput_1.RideWhereInput)
], RideListRelationFilter.prototype, "none", void 0);
RideListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RideListRelationFilter", {
        isAbstract: true
    })
], RideListRelationFilter);
exports.RideListRelationFilter = RideListRelationFilter;
