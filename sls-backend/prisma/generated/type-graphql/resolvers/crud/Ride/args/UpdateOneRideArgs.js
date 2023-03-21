"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRideArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideUpdateInput_1 = require("../../../inputs/RideUpdateInput");
const RideWhereUniqueInput_1 = require("../../../inputs/RideWhereUniqueInput");
let UpdateOneRideArgs = class UpdateOneRideArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideUpdateInput_1.RideUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideUpdateInput_1.RideUpdateInput)
], UpdateOneRideArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideWhereUniqueInput_1.RideWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideWhereUniqueInput_1.RideWhereUniqueInput)
], UpdateOneRideArgs.prototype, "where", void 0);
UpdateOneRideArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneRideArgs);
exports.UpdateOneRideArgs = UpdateOneRideArgs;
