"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateInput_1 = require("../../../inputs/CarCreateInput");
const CarUpdateInput_1 = require("../../../inputs/CarUpdateInput");
const CarWhereUniqueInput_1 = require("../../../inputs/CarWhereUniqueInput");
let UpsertOneCarArgs = class UpsertOneCarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereUniqueInput_1.CarWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarWhereUniqueInput_1.CarWhereUniqueInput)
], UpsertOneCarArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateInput_1.CarCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarCreateInput_1.CarCreateInput)
], UpsertOneCarArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarUpdateInput_1.CarUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarUpdateInput_1.CarUpdateInput)
], UpsertOneCarArgs.prototype, "update", void 0);
UpsertOneCarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCarArgs);
exports.UpsertOneCarArgs = UpsertOneCarArgs;
