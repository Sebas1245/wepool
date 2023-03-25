"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRideResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneRideArgs_1 = require("./args/UpsertOneRideArgs");
const Ride_1 = require("../../../models/Ride");
const helpers_1 = require("../../../helpers");
let UpsertOneRideResolver = class UpsertOneRideResolver {
    async upsertOneRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ride_1.Ride, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneRideArgs_1.UpsertOneRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneRideResolver.prototype, "upsertOneRide", null);
UpsertOneRideResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ride_1.Ride)
], UpsertOneRideResolver);
exports.UpsertOneRideResolver = UpsertOneRideResolver;
