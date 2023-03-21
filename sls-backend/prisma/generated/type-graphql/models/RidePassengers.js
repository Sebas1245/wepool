"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengers = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RidePassengers = class RidePassengers {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengers.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RidePassengers.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengers.prototype, "passengerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RidePassengers.prototype, "rideId", void 0);
RidePassengers = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RidePassengers", {
        isAbstract: true
    })
], RidePassengers);
exports.RidePassengers = RidePassengers;
