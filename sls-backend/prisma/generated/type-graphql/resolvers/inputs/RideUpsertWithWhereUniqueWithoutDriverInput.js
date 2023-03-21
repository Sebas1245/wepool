"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideUpsertWithWhereUniqueWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateWithoutDriverInput_1 = require("../inputs/RideCreateWithoutDriverInput");
const RideUpdateWithoutDriverInput_1 = require("../inputs/RideUpdateWithoutDriverInput");
const RideWhereUniqueInput_1 = require("../inputs/RideWhereUniqueInput");
let RideUpsertWithWhereUniqueWithoutDriverInput = class RideUpsertWithWhereUniqueWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], RideUpsertWithWhereUniqueWithoutDriverInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideUpdateWithoutDriverInput_1.RideUpdateWithoutDriverInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideUpdateWithoutDriverInput_1.RideUpdateWithoutDriverInput)
], RideUpsertWithWhereUniqueWithoutDriverInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateWithoutDriverInput_1.RideCreateWithoutDriverInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideCreateWithoutDriverInput_1.RideCreateWithoutDriverInput)
], RideUpsertWithWhereUniqueWithoutDriverInput.prototype, "create", void 0);
RideUpsertWithWhereUniqueWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideUpsertWithWhereUniqueWithoutDriverInput", {
        isAbstract: true
    })
], RideUpsertWithWhereUniqueWithoutDriverInput);
exports.RideUpsertWithWhereUniqueWithoutDriverInput = RideUpsertWithWhereUniqueWithoutDriverInput;
