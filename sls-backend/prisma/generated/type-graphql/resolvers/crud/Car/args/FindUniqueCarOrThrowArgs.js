"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCarOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarWhereUniqueInput_1 = require("../../../inputs/CarWhereUniqueInput");
let FindUniqueCarOrThrowArgs = class FindUniqueCarOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarWhereUniqueInput_1.CarWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarWhereUniqueInput_1.CarWhereUniqueInput)
], FindUniqueCarOrThrowArgs.prototype, "where", void 0);
FindUniqueCarOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCarOrThrowArgs);
exports.FindUniqueCarOrThrowArgs = FindUniqueCarOrThrowArgs;
