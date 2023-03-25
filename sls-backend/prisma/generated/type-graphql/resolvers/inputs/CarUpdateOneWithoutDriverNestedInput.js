"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarUpdateOneWithoutDriverNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateOrConnectWithoutDriverInput_1 = require("../inputs/CarCreateOrConnectWithoutDriverInput");
const CarCreateWithoutDriverInput_1 = require("../inputs/CarCreateWithoutDriverInput");
const CarUpdateWithoutDriverInput_1 = require("../inputs/CarUpdateWithoutDriverInput");
const CarUpsertWithoutDriverInput_1 = require("../inputs/CarUpsertWithoutDriverInput");
const CarWhereUniqueInput_1 = require("../inputs/CarWhereUniqueInput");
let CarUpdateOneWithoutDriverNestedInput = class CarUpdateOneWithoutDriverNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateWithoutDriverInput_1.CarCreateWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCreateWithoutDriverInput_1.CarCreateWithoutDriverInput)
], CarUpdateOneWithoutDriverNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateOrConnectWithoutDriverInput_1.CarCreateOrConnectWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarCreateOrConnectWithoutDriverInput_1.CarCreateOrConnectWithoutDriverInput)
], CarUpdateOneWithoutDriverNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarUpsertWithoutDriverInput_1.CarUpsertWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarUpsertWithoutDriverInput_1.CarUpsertWithoutDriverInput)
], CarUpdateOneWithoutDriverNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CarUpdateOneWithoutDriverNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CarUpdateOneWithoutDriverNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereUniqueInput_1.CarWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereUniqueInput_1.CarWhereUniqueInput)
], CarUpdateOneWithoutDriverNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarUpdateWithoutDriverInput_1.CarUpdateWithoutDriverInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarUpdateWithoutDriverInput_1.CarUpdateWithoutDriverInput)
], CarUpdateOneWithoutDriverNestedInput.prototype, "update", void 0);
CarUpdateOneWithoutDriverNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CarUpdateOneWithoutDriverNestedInput", {
        isAbstract: true
    })
], CarUpdateOneWithoutDriverNestedInput);
exports.CarUpdateOneWithoutDriverNestedInput = CarUpdateOneWithoutDriverNestedInput;
