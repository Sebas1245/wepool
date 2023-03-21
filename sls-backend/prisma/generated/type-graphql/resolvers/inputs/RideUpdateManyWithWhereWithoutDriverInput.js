"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideUpdateManyWithWhereWithoutDriverInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideScalarWhereInput_1 = require("../inputs/RideScalarWhereInput");
const RideUpdateManyMutationInput_1 = require("../inputs/RideUpdateManyMutationInput");
let RideUpdateManyWithWhereWithoutDriverInput = class RideUpdateManyWithWhereWithoutDriverInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideScalarWhereInput_1.RideScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideScalarWhereInput_1.RideScalarWhereInput)
], RideUpdateManyWithWhereWithoutDriverInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideUpdateManyMutationInput_1.RideUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideUpdateManyMutationInput_1.RideUpdateManyMutationInput)
], RideUpdateManyWithWhereWithoutDriverInput.prototype, "data", void 0);
RideUpdateManyWithWhereWithoutDriverInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RideUpdateManyWithWhereWithoutDriverInput", {
        isAbstract: true
    })
], RideUpdateManyWithWhereWithoutDriverInput);
exports.RideUpdateManyWithWhereWithoutDriverInput = RideUpdateManyWithWhereWithoutDriverInput;
