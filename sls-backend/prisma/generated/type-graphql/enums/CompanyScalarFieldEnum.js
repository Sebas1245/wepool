"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CompanyScalarFieldEnum;
(function (CompanyScalarFieldEnum) {
    CompanyScalarFieldEnum["id"] = "id";
    CompanyScalarFieldEnum["name"] = "name";
    CompanyScalarFieldEnum["latitude"] = "latitude";
    CompanyScalarFieldEnum["longitude"] = "longitude";
    CompanyScalarFieldEnum["street"] = "street";
    CompanyScalarFieldEnum["number"] = "number";
    CompanyScalarFieldEnum["zipCode"] = "zipCode";
    CompanyScalarFieldEnum["city"] = "city";
    CompanyScalarFieldEnum["state"] = "state";
    CompanyScalarFieldEnum["country"] = "country";
})(CompanyScalarFieldEnum = exports.CompanyScalarFieldEnum || (exports.CompanyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CompanyScalarFieldEnum, {
    name: "CompanyScalarFieldEnum",
    description: undefined,
});
