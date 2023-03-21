"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRideArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RideCreateManyInput_1 = require("../../../inputs/RideCreateManyInput");
let CreateManyRideArgs = class CreateManyRideArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RideCreateManyInput_1.RideCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyRideArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyRideArgs.prototype, "skipDuplicates", void 0);
CreateManyRideArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyRideArgs);
exports.CreateManyRideArgs = CreateManyRideArgs;
