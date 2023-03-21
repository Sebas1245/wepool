"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Car_1 = require("../../../models/Car");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let CarRelationsResolver = class CarRelationsResolver {
    async driver(car, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).car.findUniqueOrThrow({
            where: {
                id: car.id,
            },
        }).driver({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Car_1.Car, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarRelationsResolver.prototype, "driver", null);
CarRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Car_1.Car)
], CarRelationsResolver);
exports.CarRelationsResolver = CarRelationsResolver;
