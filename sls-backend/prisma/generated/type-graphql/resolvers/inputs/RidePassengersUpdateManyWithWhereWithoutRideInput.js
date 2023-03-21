"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersUpdateManyWithWhereWithoutRideInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RidePassengersScalarWhereInput_1 = require("../inputs/RidePassengersScalarWhereInput");
const RidePassengersUpdateManyMutationInput_1 = require("../inputs/RidePassengersUpdateManyMutationInput");
let RidePassengersUpdateManyWithWhereWithoutRideInput = class RidePassengersUpdateManyWithWhereWithoutRideInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersScalarWhereInput_1.RidePassengersScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersScalarWhereInput_1.RidePassengersScalarWhereInput)
], RidePassengersUpdateManyWithWhereWithoutRideInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RidePassengersUpdateManyMutationInput_1.RidePassengersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RidePassengersUpdateManyMutationInput_1.RidePassengersUpdateManyMutationInput)
], RidePassengersUpdateManyWithWhereWithoutRideInput.prototype, "data", void 0);
RidePassengersUpdateManyWithWhereWithoutRideInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RidePassengersUpdateManyWithWhereWithoutRideInput", {
        isAbstract: true
    })
], RidePassengersUpdateManyWithWhereWithoutRideInput);
exports.RidePassengersUpdateManyWithWhereWithoutRideInput = RidePassengersUpdateManyWithWhereWithoutRideInput;
