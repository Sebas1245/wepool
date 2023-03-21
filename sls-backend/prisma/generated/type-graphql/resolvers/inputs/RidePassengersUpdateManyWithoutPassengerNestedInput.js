"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpdateManyWithoutPassengerNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateManyPassengerInputEnvelope_1 = require("../inputs/RidePassengersCreateManyPassengerInputEnvelope");
const RidePassengersCreateOrConnectWithoutPassengerInput_1 = require("../inputs/RidePassengersCreateOrConnectWithoutPassengerInput");
const RidePassengersCreateWithoutPassengerInput_1 = require("../inputs/RidePassengersCreateWithoutPassengerInput");
const RidePassengersScalarWhereInput_1 = require("../inputs/RidePassengersScalarWhereInput");
const RidePassengersUpdateManyWithWhereWithoutPassengerInput_1 = require("../inputs/RidePassengersUpdateManyWithWhereWithoutPassengerInput");
const RidePassengersUpdateWithWhereUniqueWithoutPassengerInput_1 = require("../inputs/RidePassengersUpdateWithWhereUniqueWithoutPassengerInput");
const RidePassengersUpsertWithWhereUniqueWithoutPassengerInput_1 = require("../inputs/RidePassengersUpsertWithWhereUniqueWithoutPassengerInput");
const RidePassengersWhereUniqueInput_1 = require("../inputs/RidePassengersWhereUniqueInput");
let RidePassengersUpdateManyWithoutPassengerNestedInput = class RidePassengersUpdateManyWithoutPassengerNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateWithoutPassengerInput_1.RidePassengersCreateWithoutPassengerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateOrConnectWithoutPassengerInput_1.RidePassengersCreateOrConnectWithoutPassengerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersUpsertWithWhereUniqueWithoutPassengerInput_1.RidePassengersUpsertWithWhereUniqueWithoutPassengerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateManyPassengerInputEnvelope_1.RidePassengersCreateManyPassengerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateManyPassengerInputEnvelope_1.RidePassengersCreateManyPassengerInputEnvelope)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersUpdateWithWhereUniqueWithoutPassengerInput_1.RidePassengersUpdateWithWhereUniqueWithoutPassengerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersUpdateManyWithWhereWithoutPassengerInput_1.RidePassengersUpdateManyWithWhereWithoutPassengerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersScalarWhereInput_1.RidePassengersScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutPassengerNestedInput.prototype, "deleteMany", void 0);
RidePassengersUpdateManyWithoutPassengerNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpdateManyWithoutPassengerNestedInput", {
        isAbstract: true
    })
], RidePassengersUpdateManyWithoutPassengerNestedInput);
exports.RidePassengersUpdateManyWithoutPassengerNestedInput = RidePassengersUpdateManyWithoutPassengerNestedInput;
