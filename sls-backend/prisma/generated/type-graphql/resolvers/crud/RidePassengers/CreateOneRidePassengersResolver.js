"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneRidePassengersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneRidePassengersArgs_1 = require("./args/CreateOneRidePassengersArgs");
const RidePassengers_1 = require("../../../models/RidePassengers");
const helpers_1 = require("../../../helpers");
let CreateOneRidePassengersResolver = class CreateOneRidePassengersResolver {
    async createOneRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => RidePassengers_1.RidePassengers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneRidePassengersArgs_1.CreateOneRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneRidePassengersResolver.prototype, "createOneRidePassengers", null);
CreateOneRidePassengersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], CreateOneRidePassengersResolver);
exports.CreateOneRidePassengersResolver = CreateOneRidePassengersResolver;
