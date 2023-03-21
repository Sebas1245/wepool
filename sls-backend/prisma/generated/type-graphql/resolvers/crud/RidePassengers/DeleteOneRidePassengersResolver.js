"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneRidePassengersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneRidePassengersArgs_1 = require("./args/DeleteOneRidePassengersArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const helpers_1 = require("../../../helpers");
let DeleteOneRidePassengersResolver = class DeleteOneRidePassengersResolver {
    async deleteOneRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneRidePassengersArgs_1.DeleteOneRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneRidePassengersResolver.prototype, "deleteOneRidePassengers", null);
DeleteOneRidePassengersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], DeleteOneRidePassengersResolver);
exports.DeleteOneRidePassengersResolver = DeleteOneRidePassengersResolver;
