"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RidePassengersCreateManyInput = class RidePassengersCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RidePassengersCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCreateManyInput.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersCreateManyInput.prototype, "rideId", void 0);
RidePassengersCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateManyInput", {
        isAbstract: true
    })
], RidePassengersCreateManyInput);
exports.RidePassengersCreateManyInput = RidePassengersCreateManyInput;
