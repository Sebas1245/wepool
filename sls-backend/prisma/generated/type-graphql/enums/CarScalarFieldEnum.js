"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CarScalarFieldEnum;
(function (CarScalarFieldEnum) {
    CarScalarFieldEnum["id"] = "id";
    CarScalarFieldEnum["brand"] = "brand";
    CarScalarFieldEnum["model"] = "model";
    CarScalarFieldEnum["year"] = "year";
    CarScalarFieldEnum["plateNumber"] = "plateNumber";
    CarScalarFieldEnum["capacity"] = "capacity";
    CarScalarFieldEnum["color"] = "color";
    CarScalarFieldEnum["driverId"] = "driverId";
})(CarScalarFieldEnum = exports.CarScalarFieldEnum || (exports.CarScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CarScalarFieldEnum, {
    name: "CarScalarFieldEnum",
    description: undefined,
});
