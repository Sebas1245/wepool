"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCarArgs_1 = require("./args/GroupByCarArgs");
const Car_1 = require("../../../models/Car");
const CarGroupBy_1 = require("../../outputs/CarGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCarResolver = class GroupByCarResolver {
    async groupByCar(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CarGroupBy_1.CarGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCarArgs_1.GroupByCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCarResolver.prototype, "groupByCar", null);
GroupByCarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Car_1.Car)
], GroupByCarResolver);
exports.GroupByCarResolver = GroupByCarResolver;
