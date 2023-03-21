"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRideOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRideOrThrowArgs_1 = require("./args/FindFirstRideOrThrowArgs");
const Ride_1 = require("../../../models/Ride");
const helpers_1 = require("../../../helpers");
let FindFirstRideOrThrowResolver = class FindFirstRideOrThrowResolver {
    async findFirstRideOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ride_1.Ride, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRideOrThrowArgs_1.FindFirstRideOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRideOrThrowResolver.prototype, "findFirstRideOrThrow", null);
FindFirstRideOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ride_1.Ride)
], FindFirstRideOrThrowResolver);
exports.FindFirstRideOrThrowResolver = FindFirstRideOrThrowResolver;
