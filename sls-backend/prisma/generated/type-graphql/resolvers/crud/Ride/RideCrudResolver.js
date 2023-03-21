"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRideArgs_1 = require("./args/AggregateRideArgs");
const CreateManyRideArgs_1 = require("./args/CreateManyRideArgs");
const CreateOneRideArgs_1 = require("./args/CreateOneRideArgs");
const DeleteManyRideArgs_1 = require("./args/DeleteManyRideArgs");
const DeleteOneRideArgs_1 = require("./args/DeleteOneRideArgs");
const FindFirstRideArgs_1 = require("./args/FindFirstRideArgs");
const FindFirstRideOrThrowArgs_1 = require("./args/FindFirstRideOrThrowArgs");
const FindManyRideArgs_1 = require("./args/FindManyRideArgs");
const FindUniqueRideArgs_1 = require("./args/FindUniqueRideArgs");
const FindUniqueRideOrThrowArgs_1 = require("./args/FindUniqueRideOrThrowArgs");
const GroupByRideArgs_1 = require("./args/GroupByRideArgs");
const UpdateManyRideArgs_1 = require("./args/UpdateManyRideArgs");
const UpdateOneRideArgs_1 = require("./args/UpdateOneRideArgs");
const UpsertOneRideArgs_1 = require("./args/UpsertOneRideArgs");
const helpers_1 = require("../../../helpers");
const Ride_1 = require("../../../models/Ride");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRide_1 = require("../../outputs/AggregateRide");
const RideGroupBy_1 = require("../../outputs/RideGroupBy");
let RideCrudResolver = class RideCrudResolver {
    async aggregateRide(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRideOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async rides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async ride(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByRide(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneRide(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ride.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], RideCrudResolver.prototype, "aggregateRide", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyRideArgs_1.CreateManyRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "createManyRide", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ride_1.Ride, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneRideArgs_1.CreateOneRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "createOneRide", null);
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
], RideCrudResolver.prototype, "deleteManyRide", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ride_1.Ride, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneRideArgs_1.DeleteOneRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "deleteOneRide", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ride_1.Ride, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRideArgs_1.FindFirstRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "findFirstRide", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ride_1.Ride, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRideOrThrowArgs_1.FindFirstRideOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "findFirstRideOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Ride_1.Ride], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRideArgs_1.FindManyRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "rides", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ride_1.Ride, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRideArgs_1.FindUniqueRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "ride", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ride_1.Ride, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRideOrThrowArgs_1.FindUniqueRideOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "getRide", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RideGroupBy_1.RideGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRideArgs_1.GroupByRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "groupByRide", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRideArgs_1.UpdateManyRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "updateManyRide", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ride_1.Ride, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneRideArgs_1.UpdateOneRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "updateOneRide", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ride_1.Ride, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneRideArgs_1.UpsertOneRideArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RideCrudResolver.prototype, "upsertOneRide", null);
RideCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ride_1.Ride)
], RideCrudResolver);
exports.RideCrudResolver = RideCrudResolver;
