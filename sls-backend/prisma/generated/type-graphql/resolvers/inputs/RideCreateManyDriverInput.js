"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCreateManyDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideStatus_1 = require("../../enums/RideStatus");
const StartingPoint_1 = require("../../enums/StartingPoint");
let RideCreateManyDriverInput = class RideCreateManyDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideCreateManyDriverInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCreateManyDriverInput.prototype, "kmToGoalLocation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCreateManyDriverInput.prototype, "availableSeats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideStatus_1.RideStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RideCreateManyDriverInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StartingPoint_1.StartingPoint, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RideCreateManyDriverInput.prototype, "startsAt", void 0);
RideCreateManyDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideCreateManyDriverInput", {
        isAbstract: true
    })
], RideCreateManyDriverInput);
exports.RideCreateManyDriverInput = RideCreateManyDriverInput;
