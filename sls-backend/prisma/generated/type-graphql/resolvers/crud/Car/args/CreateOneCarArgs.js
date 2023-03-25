"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CarCreateInput_1 = require("../../../inputs/CarCreateInput");
let CreateOneCarArgs = class CreateOneCarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CarCreateInput_1.CarCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CarCreateInput_1.CarCreateInput)
], CreateOneCarArgs.prototype, "data", void 0);
CreateOneCarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCarArgs);
exports.CreateOneCarArgs = CreateOneCarArgs;
