"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartingPoint = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var StartingPoint;
(function (StartingPoint) {
    StartingPoint["DRIVER"] = "DRIVER";
    StartingPoint["COMPANY"] = "COMPANY";
})(StartingPoint = exports.StartingPoint || (exports.StartingPoint = {}));
TypeGraphQL.registerEnumType(StartingPoint, {
    name: "StartingPoint",
    description: undefined,
});
