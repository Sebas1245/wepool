"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRideResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByRideArgs_1 = require("./args/GroupByRideArgs");
const Ride_1 = require("../../../models/Ride");
const RideGroupBy_1 = require("../../outputs/RideGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByRideResolver = class GroupByRideResolver {
    async groupByRide(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RideGroupBy_1.RideGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRideArgs_1.GroupByRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByRideResolver.prototype, "groupByRide", null);
GroupByRideResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ride_1.Ride)
], GroupByRideResolver);
exports.GroupByRideResolver = GroupByRideResolver;
