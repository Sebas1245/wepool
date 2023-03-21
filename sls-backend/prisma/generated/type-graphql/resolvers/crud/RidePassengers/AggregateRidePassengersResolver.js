"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRidePassengersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRidePassengersArgs_1 = require("./args/AggregateRidePassengersArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const AggregateRidePassengers_1 = require("../../outputs/AggregateRidePassengers");
const helpers_1 = require("../../../helpers");
let AggregateRidePassengersResolver = class AggregateRidePassengersResolver {
    async aggregateRidePassengers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRidePassengers_1.AggregateRidePassengers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRidePassengersArgs_1.AggregateRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRidePassengersResolver.prototype, "aggregateRidePassengers", null);
AggregateRidePassengersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], AggregateRidePassengersResolver);
exports.AggregateRidePassengersResolver = AggregateRidePassengersResolver;
