"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersOrderByRelationAggregateInput_1 = require("../inputs/RidePassengersOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RideOrderByWithRelationInput = class RideOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideOrderByWithRelationInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideOrderByWithRelationInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RideOrderByWithRelationInput.prototype, "driverId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], RideOrderByWithRelationInput.prototype, "driver", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersOrderByRelationAggregateInput_1.RidePassengersOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersOrderByRelationAggregateInput_1.RidePassengersOrderByRelationAggregateInput)
], RideOrderByWithRelationInput.prototype, "passengers", void 0);
RideOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideOrderByWithRelationInput", {
        isAbstract: true
    })
], RideOrderByWithRelationInput);
exports.RideOrderByWithRelationInput = RideOrderByWithRelationInput;
