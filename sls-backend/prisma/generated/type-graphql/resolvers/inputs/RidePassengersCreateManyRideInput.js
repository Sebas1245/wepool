"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateManyRideInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RidePassengersCreateManyRideInput = class RidePassengersCreateManyRideInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCreateManyRideInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RidePassengersCreateManyRideInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCreateManyRideInput.prototype, "passengerId", void 0);
RidePassengersCreateManyRideInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateManyRideInput", {
        isAbstract: true
    })
], RidePassengersCreateManyRideInput);
exports.RidePassengersCreateManyRideInput = RidePassengersCreateManyRideInput;
