"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCreateManyDriverInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateManyDriverInput_1 = require("../inputs/RideCreateManyDriverInput");
let RideCreateManyDriverInputEnvelope = class RideCreateManyDriverInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideCreateManyDriverInput_1.RideCreateManyDriverInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RideCreateManyDriverInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RideCreateManyDriverInputEnvelope.prototype, "skipDuplicates", void 0);
RideCreateManyDriverInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("RideCreateManyDriverInputEnvelope", {
        isAbstract: true
    })
], RideCreateManyDriverInputEnvelope);
exports.RideCreateManyDriverInputEnvelope = RideCreateManyDriverInputEnvelope;
