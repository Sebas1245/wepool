"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateManyPassengerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RidePassengersCreateManyPassengerInput = class RidePassengersCreateManyPassengerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCreateManyPassengerInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RidePassengersCreateManyPassengerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCreateManyPassengerInput.prototype, "rideId", void 0);
RidePassengersCreateManyPassengerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateManyPassengerInput", {
        isAbstract: true
    })
], RidePassengersCreateManyPassengerInput);
exports.RidePassengersCreateManyPassengerInput = RidePassengersCreateManyPassengerInput;
