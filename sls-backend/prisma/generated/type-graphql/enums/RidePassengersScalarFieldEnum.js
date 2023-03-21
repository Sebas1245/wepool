"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidePassengersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RidePassengersScalarFieldEnum;
(function (RidePassengersScalarFieldEnum) {
    RidePassengersScalarFieldEnum["id"] = "id";
    RidePassengersScalarFieldEnum["createdAt"] = "createdAt";
    RidePassengersScalarFieldEnum["passengerId"] = "passengerId";
    RidePassengersScalarFieldEnum["rideId"] = "rideId";
})(RidePassengersScalarFieldEnum = exports.RidePassengersScalarFieldEnum || (exports.RidePassengersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RidePassengersScalarFieldEnum, {
    name: "RidePassengersScalarFieldEnum",
    description: undefined,
});
