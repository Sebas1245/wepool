"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarWhereInput_1 = require("../../../inputs/CarWhereInput");
let DeleteManyCarArgs = class DeleteManyCarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereInput_1.CarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CarWhereInput_1.CarWhereInput)
], DeleteManyCarArgs.prototype, "where", void 0);
DeleteManyCarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCarArgs);
exports.DeleteManyCarArgs = DeleteManyCarArgs;
