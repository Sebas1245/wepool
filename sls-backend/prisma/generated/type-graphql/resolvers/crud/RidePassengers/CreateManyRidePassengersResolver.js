"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRidePassengersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyRidePassengersArgs_1 = require("./args/CreateManyRidePassengersArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyRidePassengersResolver = class CreateManyRidePassengersResolver {
    async createManyRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyRidePassengersArgs_1.CreateManyRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyRidePassengersResolver.prototype, "createManyRidePassengers", null);
CreateManyRidePassengersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], CreateManyRidePassengersResolver);
exports.CreateManyRidePassengersResolver = CreateManyRidePassengersResolver;
