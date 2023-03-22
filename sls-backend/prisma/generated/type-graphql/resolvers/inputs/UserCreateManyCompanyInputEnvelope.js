"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateManyCompanyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyCompanyInput_1 = require("../inputs/UserCreateManyCompanyInput");
let UserCreateManyCompanyInputEnvelope = class UserCreateManyCompanyInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateManyCompanyInput_1.UserCreateManyCompanyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreateManyCompanyInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateManyCompanyInputEnvelope.prototype, "skipDuplicates", void 0);
UserCreateManyCompanyInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateManyCompanyInputEnvelope", {
        isAbstract: true
    })
], UserCreateManyCompanyInputEnvelope);
exports.UserCreateManyCompanyInputEnvelope = UserCreateManyCompanyInputEnvelope;
