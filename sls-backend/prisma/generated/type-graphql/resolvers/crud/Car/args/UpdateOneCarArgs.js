"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarUpdateInput_1 = require("../../../inputs/CarUpdateInput");
const CarWhereUniqueInput_1 = require("../../../inputs/CarWhereUniqueInput");
let UpdateOneCarArgs = class UpdateOneCarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarUpdateInput_1.CarUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarUpdateInput_1.CarUpdateInput)
], UpdateOneCarArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereUniqueInput_1.CarWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarWhereUniqueInput_1.CarWhereUniqueInput)
], UpdateOneCarArgs.prototype, "where", void 0);
UpdateOneCarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCarArgs);
exports.UpdateOneCarArgs = UpdateOneCarArgs;
