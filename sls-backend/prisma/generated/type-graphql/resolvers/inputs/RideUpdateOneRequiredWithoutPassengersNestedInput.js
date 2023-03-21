"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideUpdateOneRequiredWithoutPassengersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateOrConnectWithoutPassengersInput_1 = require("../inputs/RideCreateOrConnectWithoutPassengersInput");
const RideCreateWithoutPassengersInput_1 = require("../inputs/RideCreateWithoutPassengersInput");
const RideUpdateWithoutPassengersInput_1 = require("../inputs/RideUpdateWithoutPassengersInput");
const RideUpsertWithoutPassengersInput_1 = require("../inputs/RideUpsertWithoutPassengersInput");
const RideWhereUniqueInput_1 = require("../inputs/RideWhereUniqueInput");
let RideUpdateOneRequiredWithoutPassengersNestedInput = class RideUpdateOneRequiredWithoutPassengersNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateWithoutPassengersInput_1.RideCreateWithoutPassengersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCreateWithoutPassengersInput_1.RideCreateWithoutPassengersInput)
], RideUpdateOneRequiredWithoutPassengersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateOrConnectWithoutPassengersInput_1.RideCreateOrConnectWithoutPassengersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideCreateOrConnectWithoutPassengersInput_1.RideCreateOrConnectWithoutPassengersInput)
], RideUpdateOneRequiredWithoutPassengersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideUpsertWithoutPassengersInput_1.RideUpsertWithoutPassengersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideUpsertWithoutPassengersInput_1.RideUpsertWithoutPassengersInput)
], RideUpdateOneRequiredWithoutPassengersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], RideUpdateOneRequiredWithoutPassengersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideUpdateWithoutPassengersInput_1.RideUpdateWithoutPassengersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RideUpdateWithoutPassengersInput_1.RideUpdateWithoutPassengersInput)
], RideUpdateOneRequiredWithoutPassengersNestedInput.prototype, "update", void 0);
RideUpdateOneRequiredWithoutPassengersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideUpdateOneRequiredWithoutPassengersNestedInput", {
        isAbstract: true
    })
], RideUpdateOneRequiredWithoutPassengersNestedInput);
exports.RideUpdateOneRequiredWithoutPassengersNestedInput = RideUpdateOneRequiredWithoutPassengersNestedInput;
