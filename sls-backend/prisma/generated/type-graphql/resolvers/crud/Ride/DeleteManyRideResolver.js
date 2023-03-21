"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRideResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyRideArgs_1 = require("./args/DeleteManyRideArgs");
const Ride_1 = require("../../../models/Ride");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyRideResolver = class DeleteManyRideResolver {
    async deleteManyRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRideArgs_1.DeleteManyRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyRideResolver.prototype, "deleteManyRide", null);
DeleteManyRideResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ride_1.Ride)
], DeleteManyRideResolver);
exports.DeleteManyRideResolver = DeleteManyRideResolver;
