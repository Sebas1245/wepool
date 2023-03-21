"use strict";
var CarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let CarWhereInput = CarWhereInput_1 = class CarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CarWhereInput.prototype, "brand", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CarWhereInput.prototype, "model", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CarWhereInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CarWhereInput.prototype, "plateNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CarWhereInput.prototype, "capacity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CarWhereInput.prototype, "driverId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], CarWhereInput.prototype, "driver", void 0);
CarWhereInput = CarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CarWhereInput", {
        isAbstract: true
    })
], CarWhereInput);
exports.CarWhereInput = CarWhereInput;
