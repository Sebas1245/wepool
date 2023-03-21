"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpdateManyWithoutRideNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateManyRideInputEnvelope_1 = require("../inputs/RidePassengersCreateManyRideInputEnvelope");
const RidePassengersCreateOrConnectWithoutRideInput_1 = require("../inputs/RidePassengersCreateOrConnectWithoutRideInput");
const RidePassengersCreateWithoutRideInput_1 = require("../inputs/RidePassengersCreateWithoutRideInput");
const RidePassengersScalarWhereInput_1 = require("../inputs/RidePassengersScalarWhereInput");
const RidePassengersUpdateManyWithWhereWithoutRideInput_1 = require("../inputs/RidePassengersUpdateManyWithWhereWithoutRideInput");
const RidePassengersUpdateWithWhereUniqueWithoutRideInput_1 = require("../inputs/RidePassengersUpdateWithWhereUniqueWithoutRideInput");
const RidePassengersUpsertWithWhereUniqueWithoutRideInput_1 = require("../inputs/RidePassengersUpsertWithWhereUniqueWithoutRideInput");
const RidePassengersWhereUniqueInput_1 = require("../inputs/RidePassengersWhereUniqueInput");
let RidePassengersUpdateManyWithoutRideNestedInput = class RidePassengersUpdateManyWithoutRideNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateWithoutRideInput_1.RidePassengersCreateWithoutRideInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateOrConnectWithoutRideInput_1.RidePassengersCreateOrConnectWithoutRideInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersUpsertWithWhereUniqueWithoutRideInput_1.RidePassengersUpsertWithWhereUniqueWithoutRideInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateManyRideInputEnvelope_1.RidePassengersCreateManyRideInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateManyRideInputEnvelope_1.RidePassengersCreateManyRideInputEnvelope)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersUpdateWithWhereUniqueWithoutRideInput_1.RidePassengersUpdateWithWhereUniqueWithoutRideInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersUpdateManyWithWhereWithoutRideInput_1.RidePassengersUpdateManyWithWhereWithoutRideInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersScalarWhereInput_1.RidePassengersScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersUpdateManyWithoutRideNestedInput.prototype, "deleteMany", void 0);
RidePassengersUpdateManyWithoutRideNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpdateManyWithoutRideNestedInput", {
        isAbstract: true
    })
], RidePassengersUpdateManyWithoutRideNestedInput);
exports.RidePassengersUpdateManyWithoutRideNestedInput = RidePassengersUpdateManyWithoutRideNestedInput;
