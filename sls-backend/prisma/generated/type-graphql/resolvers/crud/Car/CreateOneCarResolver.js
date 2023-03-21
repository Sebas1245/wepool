"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCarArgs_1 = require("./args/CreateOneCarArgs");
const Car_1 = require("../../../models/Car");
const helpers_1 = require("../../../helpers");
let CreateOneCarResolver = class CreateOneCarResolver {
    async createOneCar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateOneCarResolver.prototype, "createOneCar", null);
CreateOneCarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Car_1.Car)
], CreateOneCarResolver);
exports.CreateOneCarResolver = CreateOneCarResolver;
