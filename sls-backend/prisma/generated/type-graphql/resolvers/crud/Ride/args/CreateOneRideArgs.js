"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneRideArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateInput_1 = require("../../../inputs/RideCreateInput");
let CreateOneRideArgs = class CreateOneRideArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RideCreateInput_1.RideCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RideCreateInput_1.RideCreateInput)
], CreateOneRideArgs.prototype, "data", void 0);
CreateOneRideArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneRideArgs);
exports.CreateOneRideArgs = CreateOneRideArgs;
