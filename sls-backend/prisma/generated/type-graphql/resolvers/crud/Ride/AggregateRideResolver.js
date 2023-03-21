"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRideResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRideArgs_1 = require("./args/AggregateRideArgs");
const Ride_1 = require("../../../models/Ride");
const AggregateRide_1 = require("../../outputs/AggregateRide");
const helpers_1 = require("../../../helpers");
let AggregateRideResolver = class AggregateRideResolver {
    async aggregateRide(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRide_1.AggregateRide, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRideArgs_1.AggregateRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRideResolver.prototype, "aggregateRide", null);
AggregateRideResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ride_1.Ride)
], AggregateRideResolver);
exports.AggregateRideResolver = AggregateRideResolver;
