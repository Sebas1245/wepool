"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CarWhereUniqueInput = class CarWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CarWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CarWhereUniqueInput.prototype, "driverId", void 0);
CarWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CarWhereUniqueInput", {
        isAbstract: true
    })
], CarWhereUniqueInput);
exports.CarWhereUniqueInput = CarWhereUniqueInput;
