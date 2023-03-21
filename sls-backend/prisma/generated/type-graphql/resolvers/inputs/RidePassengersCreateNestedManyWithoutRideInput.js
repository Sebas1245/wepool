"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCreateNestedManyWithoutRideInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersCreateManyRideInputEnvelope_1 = require("../inputs/RidePassengersCreateManyRideInputEnvelope");
const RidePassengersCreateOrConnectWithoutRideInput_1 = require("../inputs/RidePassengersCreateOrConnectWithoutRideInput");
const RidePassengersCreateWithoutRideInput_1 = require("../inputs/RidePassengersCreateWithoutRideInput");
const RidePassengersWhereUniqueInput_1 = require("../inputs/RidePassengersWhereUniqueInput");
let RidePassengersCreateNestedManyWithoutRideInput = class RidePassengersCreateNestedManyWithoutRideInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateWithoutRideInput_1.RidePassengersCreateWithoutRideInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersCreateNestedManyWithoutRideInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersCreateOrConnectWithoutRideInput_1.RidePassengersCreateOrConnectWithoutRideInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersCreateNestedManyWithoutRideInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersCreateManyRideInputEnvelope_1.RidePassengersCreateManyRideInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RidePassengersCreateManyRideInputEnvelope_1.RidePassengersCreateManyRideInputEnvelope)
], RidePassengersCreateNestedManyWithoutRideInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RidePassengersWhereUniqueInput_1.RidePassengersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RidePassengersCreateNestedManyWithoutRideInput.prototype, "connect", void 0);
RidePassengersCreateNestedManyWithoutRideInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersCreateNestedManyWithoutRideInput", {
        isAbstract: true
    })
], RidePassengersCreateNestedManyWithoutRideInput);
exports.RidePassengersCreateNestedManyWithoutRideInput = RidePassengersCreateNestedManyWithoutRideInput;
