"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Ride_1 = require("../../../models/Ride");
const RidePassengers_1 = require("../../../models/RidePassengers");
const User_1 = require("../../../models/User");
const RidePassengersArgs_1 = require("./args/RidePassengersArgs");
const helpers_1 = require("../../../helpers");
let RideRelationsResolver = class RideRelationsResolver {
    async driver(ride, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.findUniqueOrThrow({
            where: {
                id: ride.id,
            },
        }).driver({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async passengers(ride, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.findUniqueOrThrow({
            where: {
                id: ride.id,
            },
        }).passengers({
            ...args,
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
    tslib_1.__metadata("design:paramtypes", [Ride_1.Ride, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RideRelationsResolver.prototype, "driver", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [RidePassengers_1.RidePassengers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Ride_1.Ride, Object, Object, RidePassengersArgs_1.RidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideRelationsResolver.prototype, "passengers", null);
RideRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ride_1.Ride)
], RideRelationsResolver);
exports.RideRelationsResolver = RideRelationsResolver;
