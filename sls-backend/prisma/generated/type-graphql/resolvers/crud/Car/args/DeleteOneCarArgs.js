"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarWhereUniqueInput_1 = require("../../../inputs/CarWhereUniqueInput");
let DeleteOneCarArgs = class DeleteOneCarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereUniqueInput_1.CarWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarWhereUniqueInput_1.CarWhereUniqueInput)
], DeleteOneCarArgs.prototype, "where", void 0);
DeleteOneCarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCarArgs);
exports.DeleteOneCarArgs = DeleteOneCarArgs;
