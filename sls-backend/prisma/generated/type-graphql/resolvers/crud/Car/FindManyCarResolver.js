"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCarArgs_1 = require("./args/FindManyCarArgs");
const Car_1 = require("../../../models/Car");
const helpers_1 = require("../../../helpers");
let FindManyCarResolver = class FindManyCarResolver {
    async cars(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Car_1.Car], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCarArgs_1.FindManyCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCarResolver.prototype, "cars", null);
FindManyCarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Car_1.Car)
], FindManyCarResolver);
exports.FindManyCarResolver = FindManyCarResolver;
