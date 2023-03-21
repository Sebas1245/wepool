"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RidePassengersWhereUniqueInput = class RidePassengersWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersWhereUniqueInput.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersWhereUniqueInput.prototype, "rideId", void 0);
RidePassengersWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersWhereUniqueInput", {
        isAbstract: true
    })
], RidePassengersWhereUniqueInput);
exports.RidePassengersWhereUniqueInput = RidePassengersWhereUniqueInput;
