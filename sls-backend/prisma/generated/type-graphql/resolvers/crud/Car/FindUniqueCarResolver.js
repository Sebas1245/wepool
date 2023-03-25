"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCarArgs_1 = require("./args/FindUniqueCarArgs");
const Car_1 = require("../../../models/Car");
const helpers_1 = require("../../../helpers");
let FindUniqueCarResolver = class FindUniqueCarResolver {
    async car(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Car_1.Car, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCarArgs_1.FindUniqueCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCarResolver.prototype, "car", null);
FindUniqueCarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Car_1.Car)
], FindUniqueCarResolver);
exports.FindUniqueCarResolver = FindUniqueCarResolver;
