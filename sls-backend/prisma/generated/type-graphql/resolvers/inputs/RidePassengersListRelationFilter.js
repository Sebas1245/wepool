"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersWhereInput_1 = require("../inputs/RidePassengersWhereInput");
let RidePassengersListRelationFilter = class RidePassengersListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereInput_1.RidePassengersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereInput_1.RidePassengersWhereInput)
], RidePassengersListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereInput_1.RidePassengersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereInput_1.RidePassengersWhereInput)
], RidePassengersListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersWhereInput_1.RidePassengersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersWhereInput_1.RidePassengersWhereInput)
], RidePassengersListRelationFilter.prototype, "none", void 0);
RidePassengersListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersListRelationFilter", {
        isAbstract: true
    })
], RidePassengersListRelationFilter);
exports.RidePassengersListRelationFilter = RidePassengersListRelationFilter;
