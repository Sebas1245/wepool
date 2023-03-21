"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRidePassengersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneRidePassengersArgs_1 = require("./args/UpdateOneRidePassengersArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const helpers_1 = require("../../../helpers");
let UpdateOneRidePassengersResolver = class UpdateOneRidePassengersResolver {
    async updateOneRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => RidePassengers_1.RidePassengers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneRidePassengersArgs_1.UpdateOneRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneRidePassengersResolver.prototype, "updateOneRidePassengers", null);
UpdateOneRidePassengersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], UpdateOneRidePassengersResolver);
exports.UpdateOneRidePassengersResolver = UpdateOneRidePassengersResolver;
