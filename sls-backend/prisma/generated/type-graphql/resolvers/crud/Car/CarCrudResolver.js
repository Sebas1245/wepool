"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCarArgs_1 = require("./args/AggregateCarArgs");
const CreateManyCarArgs_1 = require("./args/CreateManyCarArgs");
const CreateOneCarArgs_1 = require("./args/CreateOneCarArgs");
const DeleteManyCarArgs_1 = require("./args/DeleteManyCarArgs");
const DeleteOneCarArgs_1 = require("./args/DeleteOneCarArgs");
const FindFirstCarArgs_1 = require("./args/FindFirstCarArgs");
const FindFirstCarOrThrowArgs_1 = require("./args/FindFirstCarOrThrowArgs");
const FindManyCarArgs_1 = require("./args/FindManyCarArgs");
const FindUniqueCarArgs_1 = require("./args/FindUniqueCarArgs");
const FindUniqueCarOrThrowArgs_1 = require("./args/FindUniqueCarOrThrowArgs");
const GroupByCarArgs_1 = require("./args/GroupByCarArgs");
const UpdateManyCarArgs_1 = require("./args/UpdateManyCarArgs");
const UpdateOneCarArgs_1 = require("./args/UpdateOneCarArgs");
const UpsertOneCarArgs_1 = require("./args/UpsertOneCarArgs");
const helpers_1 = require("../../../helpers");
const Car_1 = require("../../../models/Car");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCar_1 = require("../../outputs/AggregateCar");
const CarGroupBy_1 = require("../../outputs/CarGroupBy");
let CarCrudResolver = class CarCrudResolver {
    async aggregateCar(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).car.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCarOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async cars(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async car(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCar(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCar_1.AggregateCar, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCarArgs_1.AggregateCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "aggregateCar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCarArgs_1.CreateManyCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "createManyCar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Car_1.Car, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCarArgs_1.CreateOneCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "createOneCar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCarArgs_1.DeleteManyCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "deleteManyCar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Car_1.Car, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCarArgs_1.DeleteOneCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "deleteOneCar", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Car_1.Car, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCarArgs_1.FindFirstCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "findFirstCar", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Car_1.Car, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCarOrThrowArgs_1.FindFirstCarOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "findFirstCarOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Car_1.Car], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCarArgs_1.FindManyCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "cars", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Car_1.Car, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCarArgs_1.FindUniqueCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "car", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Car_1.Car, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCarOrThrowArgs_1.FindUniqueCarOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "getCar", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CarGroupBy_1.CarGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCarArgs_1.GroupByCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "groupByCar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCarArgs_1.UpdateManyCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "updateManyCar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Car_1.Car, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCarArgs_1.UpdateOneCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "updateOneCar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Car_1.Car, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCarArgs_1.UpsertOneCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CarCrudResolver.prototype, "upsertOneCar", null);
CarCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Car_1.Car)
], CarCrudResolver);
exports.CarCrudResolver = CarCrudResolver;
