"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRidePassengersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRidePassengersArgs_1 = require("./args/FindFirstRidePassengersArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const helpers_1 = require("../../../helpers");
let FindFirstRidePassengersResolver = class FindFirstRidePassengersResolver {
    async findFirstRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => RidePassengers_1.RidePassengers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRidePassengersArgs_1.FindFirstRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRidePassengersResolver.prototype, "findFirstRidePassengers", null);
FindFirstRidePassengersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], FindFirstRidePassengersResolver);
exports.FindFirstRidePassengersResolver = FindFirstRidePassengersResolver;
