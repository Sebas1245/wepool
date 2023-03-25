"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RidePassengersSumAggregate = class RidePassengersSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersSumAggregate.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengersSumAggregate.prototype, "rideId", void 0);
RidePassengersSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RidePassengersSumAggregate", {
        isAbstract: true
    })
], RidePassengersSumAggregate);
exports.RidePassengersSumAggregate = RidePassengersSumAggregate;
