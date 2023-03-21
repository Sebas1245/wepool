"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RideWhereUniqueInput = class RideWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RideWhereUniqueInput.prototype, "driverId", void 0);
RideWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideWhereUniqueInput", {
        isAbstract: true
    })
], RideWhereUniqueInput);
exports.RideWhereUniqueInput = RideWhereUniqueInput;
