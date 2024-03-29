"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyCarArgs_1 = require("./args/DeleteManyCarArgs");
const Car_1 = require("../../../models/Car");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCarResolver = class DeleteManyCarResolver {
    async deleteManyCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCarArgs_1.DeleteManyCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCarResolver.prototype, "deleteManyCar", null);
DeleteManyCarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Car_1.Car)
], DeleteManyCarResolver);
exports.DeleteManyCarResolver = DeleteManyCarResolver;
