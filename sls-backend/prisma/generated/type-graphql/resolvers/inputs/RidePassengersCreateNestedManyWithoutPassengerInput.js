"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateNestedManyWithoutPassengerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateManyPassengerInputEnvelope_1 = require("../inputs/RidePassengersCreateManyPassengerInputEnvelope");
const RidePassengersCreateOrConnectWithoutPassengerInput_1 = require("../inputs/RidePassengersCreateOrConnectWithoutPassengerInput");
const RidePassengersCreateWithoutPassengerInput_1 = require("../inputs/RidePassengersCreateWithoutPassengerInput");
const RidePassengersWhereUniqueInput_1 = require("../inputs/RidePassengersWhereUniqueInput");
let RidePassengersCreateNestedManyWithoutPassengerInput = class RidePassengersCreateNestedManyWithoutPassengerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateWithoutPassengerInput_1.RidePassengersCreateWithoutPassengerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersCreateNestedManyWithoutPassengerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateOrConnectWithoutPassengerInput_1.RidePassengersCreateOrConnectWithoutPassengerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersCreateNestedManyWithoutPassengerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateManyPassengerInputEnvelope_1.RidePassengersCreateManyPassengerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateManyPassengerInputEnvelope_1.RidePassengersCreateManyPassengerInputEnvelope)
], RidePassengersCreateNestedManyWithoutPassengerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersCreateNestedManyWithoutPassengerInput.prototype, "connect", void 0);
RidePassengersCreateNestedManyWithoutPassengerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateNestedManyWithoutPassengerInput", {
        isAbstract: true
    })
], RidePassengersCreateNestedManyWithoutPassengerInput);
exports.RidePassengersCreateNestedManyWithoutPassengerInput = RidePassengersCreateNestedManyWithoutPassengerInput;
