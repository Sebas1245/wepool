"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCreateOrConnectWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateWithoutDriverInput_1 = require("../inputs/RideCreateWithoutDriverInput");
const RideWhereUniqueInput_1 = require("../inputs/RideWhereUniqueInput");
let RideCreateOrConnectWithoutDriverInput = class RideCreateOrConnectWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], RideCreateOrConnectWithoutDriverInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateWithoutDriverInput_1.RideCreateWithoutDriverInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideCreateWithoutDriverInput_1.RideCreateWithoutDriverInput)
], RideCreateOrConnectWithoutDriverInput.prototype, "create", void 0);
RideCreateOrConnectWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideCreateOrConnectWithoutDriverInput", {
        isAbstract: true
    })
], RideCreateOrConnectWithoutDriverInput);
exports.RideCreateOrConnectWithoutDriverInput = RideCreateOrConnectWithoutDriverInput;
