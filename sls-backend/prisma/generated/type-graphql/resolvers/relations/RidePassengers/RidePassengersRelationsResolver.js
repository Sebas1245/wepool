"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Ride_1 = require("../../../models/Ride");
const RidePassengers_1 = require("../../../models/RidePassengers");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let RidePassengersRelationsResolver = class RidePassengersRelationsResolver {
    async passenger(ridePassengers, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.findUniqueOrThrow({
            where: {
                id: ridePassengers.id,
            },
        }).passenger({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async ride(ridePassengers, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.findUniqueOrThrow({
            where: {
                id: ridePassengers.id,
            },
        }).ride({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [RidePassengers_1.RidePassengers, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RidePassengersRelationsResolver.prototype, "passenger", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Ride_1.Ride, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [RidePassengers_1.RidePassengers, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RidePassengersRelationsResolver.prototype, "ride", null);
RidePassengersRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], RidePassengersRelationsResolver);
exports.RidePassengersRelationsResolver = RidePassengersRelationsResolver;
