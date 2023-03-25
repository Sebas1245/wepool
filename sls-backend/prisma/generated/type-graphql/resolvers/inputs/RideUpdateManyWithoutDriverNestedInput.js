"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideUpdateManyWithoutDriverNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateManyDriverInputEnvelope_1 = require("../inputs/RideCreateManyDriverInputEnvelope");
const RideCreateOrConnectWithoutDriverInput_1 = require("../inputs/RideCreateOrConnectWithoutDriverInput");
const RideCreateWithoutDriverInput_1 = require("../inputs/RideCreateWithoutDriverInput");
const RideScalarWhereInput_1 = require("../inputs/RideScalarWhereInput");
const RideUpdateManyWithWhereWithoutDriverInput_1 = require("../inputs/RideUpdateManyWithWhereWithoutDriverInput");
const RideUpdateWithWhereUniqueWithoutDriverInput_1 = require("../inputs/RideUpdateWithWhereUniqueWithoutDriverInput");
const RideUpsertWithWhereUniqueWithoutDriverInput_1 = require("../inputs/RideUpsertWithWhereUniqueWithoutDriverInput");
const RideWhereUniqueInput_1 = require("../inputs/RideWhereUniqueInput");
let RideUpdateManyWithoutDriverNestedInput = class RideUpdateManyWithoutDriverNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideCreateWithoutDriverInput_1.RideCreateWithoutDriverInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideUpdateManyWithoutDriverNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideCreateOrConnectWithoutDriverInput_1.RideCreateOrConnectWithoutDriverInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideUpdateManyWithoutDriverNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideUpsertWithWhereUniqueWithoutDriverInput_1.RideUpsertWithWhereUniqueWithoutDriverInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideUpdateManyWithoutDriverNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateManyDriverInputEnvelope_1.RideCreateManyDriverInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCreateManyDriverInputEnvelope_1.RideCreateManyDriverInputEnvelope)
], RideUpdateManyWithoutDriverNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideWhereUniqueInput_1.RideWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideUpdateManyWithoutDriverNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideWhereUniqueInput_1.RideWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideUpdateManyWithoutDriverNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideWhereUniqueInput_1.RideWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideUpdateManyWithoutDriverNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideWhereUniqueInput_1.RideWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideUpdateManyWithoutDriverNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideUpdateWithWhereUniqueWithoutDriverInput_1.RideUpdateWithWhereUniqueWithoutDriverInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideUpdateManyWithoutDriverNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideUpdateManyWithWhereWithoutDriverInput_1.RideUpdateManyWithWhereWithoutDriverInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideUpdateManyWithoutDriverNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideScalarWhereInput_1.RideScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideUpdateManyWithoutDriverNestedInput.prototype, "deleteMany", void 0);
RideUpdateManyWithoutDriverNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideUpdateManyWithoutDriverNestedInput", {
        isAbstract: true
    })
], RideUpdateManyWithoutDriverNestedInput);
exports.RideUpdateManyWithoutDriverNestedInput = RideUpdateManyWithoutDriverNestedInput;
