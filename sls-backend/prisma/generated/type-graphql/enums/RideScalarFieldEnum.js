"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RideScalarFieldEnum;
(function (RideScalarFieldEnum) {
    RideScalarFieldEnum["id"] = "id";
    RideScalarFieldEnum["kmToGoalLocation"] = "kmToGoalLocation";
    RideScalarFieldEnum["availableSeats"] = "availableSeats";
    RideScalarFieldEnum["status"] = "status";
    RideScalarFieldEnum["startsAt"] = "startsAt";
    RideScalarFieldEnum["driverId"] = "driverId";
})(RideScalarFieldEnum = exports.RideScalarFieldEnum || (exports.RideScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RideScalarFieldEnum, {
    name: "RideScalarFieldEnum",
    description: undefined,
});
