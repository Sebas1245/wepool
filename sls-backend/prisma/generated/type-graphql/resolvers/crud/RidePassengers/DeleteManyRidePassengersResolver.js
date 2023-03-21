"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRidePassengersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyRidePassengersArgs_1 = require("./args/DeleteManyRidePassengersArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyRidePassengersResolver = class DeleteManyRidePassengersResolver {
    async deleteManyRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRidePassengersArgs_1.DeleteManyRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyRidePassengersResolver.prototype, "deleteManyRidePassengers", null);
DeleteManyRidePassengersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], DeleteManyRidePassengersResolver);
exports.DeleteManyRidePassengersResolver = DeleteManyRidePassengersResolver;
