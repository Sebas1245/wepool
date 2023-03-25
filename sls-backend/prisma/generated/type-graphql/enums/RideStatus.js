"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RideStatus;
(function (RideStatus) {
    RideStatus["OPEN"] = "OPEN";
    RideStatus["CLOSED"] = "CLOSED";
})(RideStatus = exports.RideStatus || (exports.RideStatus = {}));
TypeGraphQL.registerEnumType(RideStatus, {
    name: "RideStatus",
    description: undefined,
});
