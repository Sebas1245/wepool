"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
    UserScalarFieldEnum["fname"] = "fname";
    UserScalarFieldEnum["lname"] = "lname";
    UserScalarFieldEnum["latitude"] = "latitude";
    UserScalarFieldEnum["longitude"] = "longitude";
    UserScalarFieldEnum["street"] = "street";
    UserScalarFieldEnum["number"] = "number";
    UserScalarFieldEnum["zipCode"] = "zipCode";
    UserScalarFieldEnum["city"] = "city";
    UserScalarFieldEnum["state"] = "state";
    UserScalarFieldEnum["country"] = "country";
    UserScalarFieldEnum["phoneNumber"] = "phoneNumber";
    UserScalarFieldEnum["carId"] = "carId";
    UserScalarFieldEnum["companyId"] = "companyId";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
    name: "UserScalarFieldEnum",
    description: undefined,
});
