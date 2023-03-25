"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RideCount = class RideCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RideCount.prototype, "passengers", void 0);
RideCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RideCount", {
        isAbstract: true
    })
], RideCount);
exports.RideCount = RideCount;
