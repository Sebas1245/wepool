"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRidePassengersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyRidePassengersArgs_1 = require("./args/FindManyRidePassengersArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const helpers_1 = require("../../../helpers");
let FindManyRidePassengersResolver = class FindManyRidePassengersResolver {
    async findManyRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RidePassengers_1.RidePassengers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRidePassengersArgs_1.FindManyRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyRidePassengersResolver.prototype, "findManyRidePassengers", null);
FindManyRidePassengersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], FindManyRidePassengersResolver);
exports.FindManyRidePassengersResolver = FindManyRidePassengersResolver;
