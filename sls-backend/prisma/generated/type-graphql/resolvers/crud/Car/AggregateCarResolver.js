"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCarArgs_1 = require("./args/AggregateCarArgs");
const Car_1 = require("../../../models/Car");
const AggregateCar_1 = require("../../outputs/AggregateCar");
const helpers_1 = require("../../../helpers");
let AggregateCarResolver = class AggregateCarResolver {
    async aggregateCar(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).car.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
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
], AggregateCarResolver.prototype, "aggregateCar", null);
AggregateCarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Car_1.Car)
], AggregateCarResolver);
exports.AggregateCarResolver = AggregateCarResolver;
