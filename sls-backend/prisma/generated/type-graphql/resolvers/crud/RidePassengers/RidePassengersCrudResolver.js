"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRidePassengersArgs_1 = require("./args/AggregateRidePassengersArgs");
const CreateManyRidePassengersArgs_1 = require("./args/CreateManyRidePassengersArgs");
const CreateOneRidePassengersArgs_1 = require("./args/CreateOneRidePassengersArgs");
const DeleteManyRidePassengersArgs_1 = require("./args/DeleteManyRidePassengersArgs");
const DeleteOneRidePassengersArgs_1 = require("./args/DeleteOneRidePassengersArgs");
const FindFirstRidePassengersArgs_1 = require("./args/FindFirstRidePassengersArgs");
const FindFirstRidePassengersOrThrowArgs_1 = require("./args/FindFirstRidePassengersOrThrowArgs");
const FindManyRidePassengersArgs_1 = require("./args/FindManyRidePassengersArgs");
const FindUniqueRidePassengersArgs_1 = require("./args/FindUniqueRidePassengersArgs");
const FindUniqueRidePassengersOrThrowArgs_1 = require("./args/FindUniqueRidePassengersOrThrowArgs");
const GroupByRidePassengersArgs_1 = require("./args/GroupByRidePassengersArgs");
const UpdateManyRidePassengersArgs_1 = require("./args/UpdateManyRidePassengersArgs");
const UpdateOneRidePassengersArgs_1 = require("./args/UpdateOneRidePassengersArgs");
const UpsertOneRidePassengersArgs_1 = require("./args/UpsertOneRidePassengersArgs");
const helpers_1 = require("../../../helpers");
const RidePassengers_1 = require("../../../models/RidePassengers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRidePassengers_1 = require("../../outputs/AggregateRidePassengers");
const RidePassengersGroupBy_1 = require("../../outputs/RidePassengersGroupBy");
let RidePassengersCrudResolver = class RidePassengersCrudResolver {
    async aggregateRidePassengers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRidePassengersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueRidePassengersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByRidePassengers(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneRidePassengers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ridePassengers.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], RidePassengersCrudResolver.prototype, "aggregateRidePassengers", null);
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
], RidePassengersCrudResolver.prototype, "createManyRidePassengers", null);
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
], RidePassengersCrudResolver.prototype, "createOneRidePassengers", null);
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
], RidePassengersCrudResolver.prototype, "deleteManyRidePassengers", null);
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
], RidePassengersCrudResolver.prototype, "deleteOneRidePassengers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => RidePassengers_1.RidePassengers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRidePassengersArgs_1.FindFirstRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RidePassengersCrudResolver.prototype, "findFirstRidePassengers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => RidePassengers_1.RidePassengers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRidePassengersOrThrowArgs_1.FindFirstRidePassengersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RidePassengersCrudResolver.prototype, "findFirstRidePassengersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RidePassengers_1.RidePassengers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRidePassengersArgs_1.FindManyRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RidePassengersCrudResolver.prototype, "findManyRidePassengers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => RidePassengers_1.RidePassengers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRidePassengersArgs_1.FindUniqueRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RidePassengersCrudResolver.prototype, "findUniqueRidePassengers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => RidePassengers_1.RidePassengers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRidePassengersOrThrowArgs_1.FindUniqueRidePassengersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RidePassengersCrudResolver.prototype, "findUniqueRidePassengersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RidePassengersGroupBy_1.RidePassengersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRidePassengersArgs_1.GroupByRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RidePassengersCrudResolver.prototype, "groupByRidePassengers", null);
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
], RidePassengersCrudResolver.prototype, "updateManyRidePassengers", null);
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
], RidePassengersCrudResolver.prototype, "updateOneRidePassengers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => RidePassengers_1.RidePassengers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneRidePassengersArgs_1.UpsertOneRidePassengersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RidePassengersCrudResolver.prototype, "upsertOneRidePassengers", null);
RidePassengersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RidePassengers_1.RidePassengers)
], RidePassengersCrudResolver);
exports.RidePassengersCrudResolver = RidePassengersCrudResolver;
