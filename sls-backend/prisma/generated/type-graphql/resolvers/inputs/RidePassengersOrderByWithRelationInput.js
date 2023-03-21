"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideOrderByWithRelationInput_1 = require("../inputs/RideOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RidePassengersOrderByWithRelationInput = class RidePassengersOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersOrderByWithRelationInput.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RidePassengersOrderByWithRelationInput.prototype, "rideId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], RidePassengersOrderByWithRelationInput.prototype, "passenger", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideOrderByWithRelationInput_1.RideOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideOrderByWithRelationInput_1.RideOrderByWithRelationInput)
], RidePassengersOrderByWithRelationInput.prototype, "ride", void 0);
RidePassengersOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersOrderByWithRelationInput", {
        isAbstract: true
    })
], RidePassengersOrderByWithRelationInput);
exports.RidePassengersOrderByWithRelationInput = RidePassengersOrderByWithRelationInput;
