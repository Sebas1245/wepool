"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRidePassengersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByRidePassengersArgs_1 = require("./args/GroupByRidePassengersArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const RidePassengersGroupBy_1 = require("../../outputs/RidePassengersGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByRidePassengersResolver = class GroupByRidePassengersResolver {
    async groupByRidePassengers(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RidePassengersGroupBy_1.RidePassengersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRidePassengersArgs_1.GroupByRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByRidePassengersResolver.prototype, "groupByRidePassengers", null);
GroupByRidePassengersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], GroupByRidePassengersResolver);
exports.GroupByRidePassengersResolver = GroupByRidePassengersResolver;
