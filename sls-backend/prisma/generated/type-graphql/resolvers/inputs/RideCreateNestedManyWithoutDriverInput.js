"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCreateNestedManyWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateManyDriverInputEnvelope_1 = require("../inputs/RideCreateManyDriverInputEnvelope");
const RideCreateOrConnectWithoutDriverInput_1 = require("../inputs/RideCreateOrConnectWithoutDriverInput");
const RideCreateWithoutDriverInput_1 = require("../inputs/RideCreateWithoutDriverInput");
const RideWhereUniqueInput_1 = require("../inputs/RideWhereUniqueInput");
let RideCreateNestedManyWithoutDriverInput = class RideCreateNestedManyWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideCreateWithoutDriverInput_1.RideCreateWithoutDriverInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideCreateNestedManyWithoutDriverInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideCreateOrConnectWithoutDriverInput_1.RideCreateOrConnectWithoutDriverInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideCreateNestedManyWithoutDriverInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateManyDriverInputEnvelope_1.RideCreateManyDriverInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCreateManyDriverInputEnvelope_1.RideCreateManyDriverInputEnvelope)
], RideCreateNestedManyWithoutDriverInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideWhereUniqueInput_1.RideWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RideCreateNestedManyWithoutDriverInput.prototype, "connect", void 0);
RideCreateNestedManyWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideCreateNestedManyWithoutDriverInput", {
        isAbstract: true
    })
], RideCreateNestedManyWithoutDriverInput);
exports.RideCreateNestedManyWithoutDriverInput = RideCreateNestedManyWithoutDriverInput;
