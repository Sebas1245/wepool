"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Car_1 = require("../../../models/Car");
const Ride_1 = require("../../../models/Ride");
const RidePassengers_1 = require("../../../models/RidePassengers");
const User_1 = require("../../../models/User");
const UserDriverRidesArgs_1 = require("./args/UserDriverRidesArgs");
const UserPassengerRidesArgs_1 = require("./args/UserPassengerRidesArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async car(user, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow({
            where: {
                id: user.id,
            },
        }).car({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async driverRides(user, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow({
            where: {
                id: user.id,
            },
        }).driverRides({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async passengerRides(user, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow({
            where: {
                id: user.id,
            },
        }).passengerRides({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Car_1.Car, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "car", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Ride_1.Ride], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, Object, UserDriverRidesArgs_1.UserDriverRidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "driverRides", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [RidePassengers_1.RidePassengers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, Object, UserPassengerRidesArgs_1.UserPassengerRidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "passengerRides", null);
UserRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
