"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRidePassengersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyRidePassengersArgs_1 = require("./args/UpdateManyRidePassengersArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyRidePassengersResolver = class UpdateManyRidePassengersResolver {
    async updateManyRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRidePassengersArgs_1.UpdateManyRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyRidePassengersResolver.prototype, "updateManyRidePassengers", null);
UpdateManyRidePassengersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], UpdateManyRidePassengersResolver);
exports.UpdateManyRidePassengersResolver = UpdateManyRidePassengersResolver;
