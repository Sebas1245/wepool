"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarUpdateManyMutationInput_1 = require("../../../inputs/CarUpdateManyMutationInput");
const CarWhereInput_1 = require("../../../inputs/CarWhereInput");
let UpdateManyCarArgs = class UpdateManyCarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarUpdateManyMutationInput_1.CarUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarUpdateManyMutationInput_1.CarUpdateManyMutationInput)
], UpdateManyCarArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereInput_1.CarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereInput_1.CarWhereInput)
], UpdateManyCarArgs.prototype, "where", void 0);
UpdateManyCarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCarArgs);
exports.UpdateManyCarArgs = UpdateManyCarArgs;
