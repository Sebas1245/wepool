"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRidePassengersOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRidePassengersOrThrowArgs_1 = require("./args/FindFirstRidePassengersOrThrowArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const helpers_1 = require("../../../helpers");
let FindFirstRidePassengersOrThrowResolver = class FindFirstRidePassengersOrThrowResolver {
    async findFirstRidePassengersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRidePassengersOrThrowArgs_1.FindFirstRidePassengersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRidePassengersOrThrowResolver.prototype, "findFirstRidePassengersOrThrow", null);
FindFirstRidePassengersOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], FindFirstRidePassengersOrThrowResolver);
exports.FindFirstRidePassengersOrThrowResolver = FindFirstRidePassengersOrThrowResolver;
