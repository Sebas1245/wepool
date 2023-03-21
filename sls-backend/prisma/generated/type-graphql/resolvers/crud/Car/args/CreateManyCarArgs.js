"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateManyInput_1 = require("../../../inputs/CarCreateManyInput");
let CreateManyCarArgs = class CreateManyCarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CarCreateManyInput_1.CarCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCarArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCarArgs.prototype, "skipDuplicates", void 0);
CreateManyCarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCarArgs);
exports.CreateManyCarArgs = CreateManyCarArgs;
