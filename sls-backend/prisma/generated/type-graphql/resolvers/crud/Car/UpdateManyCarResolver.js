"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCarArgs_1 = require("./args/UpdateManyCarArgs");
const Car_1 = require("../../../models/Car");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCarResolver = class UpdateManyCarResolver {
    async updateManyCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCarArgs_1.UpdateManyCarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCarResolver.prototype, "updateManyCar", null);
UpdateManyCarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Car_1.Car)
], UpdateManyCarResolver);
exports.UpdateManyCarResolver = UpdateManyCarResolver;
