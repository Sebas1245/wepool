"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideUpdateWithWhereUniqueWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideUpdateWithoutDriverInput_1 = require("../inputs/RideUpdateWithoutDriverInput");
const RideWhereUniqueInput_1 = require("../inputs/RideWhereUniqueInput");
let RideUpdateWithWhereUniqueWithoutDriverInput = class RideUpdateWithWhereUniqueWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], RideUpdateWithWhereUniqueWithoutDriverInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideUpdateWithoutDriverInput_1.RideUpdateWithoutDriverInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideUpdateWithoutDriverInput_1.RideUpdateWithoutDriverInput)
], RideUpdateWithWhereUniqueWithoutDriverInput.prototype, "data", void 0);
RideUpdateWithWhereUniqueWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideUpdateWithWhereUniqueWithoutDriverInput", {
        isAbstract: true
    })
], RideUpdateWithWhereUniqueWithoutDriverInput);
exports.RideUpdateWithWhereUniqueWithoutDriverInput = RideUpdateWithWhereUniqueWithoutDriverInput;
