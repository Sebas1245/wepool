"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Car: crudResolvers.CarCrudResolver,
    Company: crudResolvers.CompanyCrudResolver,
    Ride: crudResolvers.RideCrudResolver,
    RidePassengers: crudResolvers.RidePassengersCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Car: {
        aggregateCar: actionResolvers.AggregateCarResolver,
        createManyCar: actionResolvers.CreateManyCarResolver,
        createOneCar: actionResolvers.CreateOneCarResolver,
        deleteManyCar: actionResolvers.DeleteManyCarResolver,
        deleteOneCar: actionResolvers.DeleteOneCarResolver,
        findFirstCar: actionResolvers.FindFirstCarResolver,
        findFirstCarOrThrow: actionResolvers.FindFirstCarOrThrowResolver,
        cars: actionResolvers.FindManyCarResolver,
        car: actionResolvers.FindUniqueCarResolver,
        getCar: actionResolvers.FindUniqueCarOrThrowResolver,
        groupByCar: actionResolvers.GroupByCarResolver,
        updateManyCar: actionResolvers.UpdateManyCarResolver,
        updateOneCar: actionResolvers.UpdateOneCarResolver,
        upsertOneCar: actionResolvers.UpsertOneCarResolver
    },
    Company: {
        aggregateCompany: actionResolvers.AggregateCompanyResolver,
        createManyCompany: actionResolvers.CreateManyCompanyResolver,
        createOneCompany: actionResolvers.CreateOneCompanyResolver,
        deleteManyCompany: actionResolvers.DeleteManyCompanyResolver,
        deleteOneCompany: actionResolvers.DeleteOneCompanyResolver,
        findFirstCompany: actionResolvers.FindFirstCompanyResolver,
        findFirstCompanyOrThrow: actionResolvers.FindFirstCompanyOrThrowResolver,
        companies: actionResolvers.FindManyCompanyResolver,
        company: actionResolvers.FindUniqueCompanyResolver,
        getCompany: actionResolvers.FindUniqueCompanyOrThrowResolver,
        groupByCompany: actionResolvers.GroupByCompanyResolver,
        updateManyCompany: actionResolvers.UpdateManyCompanyResolver,
        updateOneCompany: actionResolvers.UpdateOneCompanyResolver,
        upsertOneCompany: actionResolvers.UpsertOneCompanyResolver
    },
    Ride: {
        aggregateRide: actionResolvers.AggregateRideResolver,
        createManyRide: actionResolvers.CreateManyRideResolver,
        createOneRide: actionResolvers.CreateOneRideResolver,
        deleteManyRide: actionResolvers.DeleteManyRideResolver,
        deleteOneRide: actionResolvers.DeleteOneRideResolver,
        findFirstRide: actionResolvers.FindFirstRideResolver,
        findFirstRideOrThrow: actionResolvers.FindFirstRideOrThrowResolver,
        rides: actionResolvers.FindManyRideResolver,
        ride: actionResolvers.FindUniqueRideResolver,
        getRide: actionResolvers.FindUniqueRideOrThrowResolver,
        groupByRide: actionResolvers.GroupByRideResolver,
        updateManyRide: actionResolvers.UpdateManyRideResolver,
        updateOneRide: actionResolvers.UpdateOneRideResolver,
        upsertOneRide: actionResolvers.UpsertOneRideResolver
    },
    RidePassengers: {
        aggregateRidePassengers: actionResolvers.AggregateRidePassengersResolver,
        createManyRidePassengers: actionResolvers.CreateManyRidePassengersResolver,
        createOneRidePassengers: actionResolvers.CreateOneRidePassengersResolver,
        deleteManyRidePassengers: actionResolvers.DeleteManyRidePassengersResolver,
        deleteOneRidePassengers: actionResolvers.DeleteOneRidePassengersResolver,
        findFirstRidePassengers: actionResolvers.FindFirstRidePassengersResolver,
        findFirstRidePassengersOrThrow: actionResolvers.FindFirstRidePassengersOrThrowResolver,
        findManyRidePassengers: actionResolvers.FindManyRidePassengersResolver,
        findUniqueRidePassengers: actionResolvers.FindUniqueRidePassengersResolver,
        findUniqueRidePassengersOrThrow: actionResolvers.FindUniqueRidePassengersOrThrowResolver,
        groupByRidePassengers: actionResolvers.GroupByRidePassengersResolver,
        updateManyRidePassengers: actionResolvers.UpdateManyRidePassengersResolver,
        updateOneRidePassengers: actionResolvers.UpdateOneRidePassengersResolver,
        upsertOneRidePassengers: actionResolvers.UpsertOneRidePassengersResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Car: ["aggregateCar", "createManyCar", "createOneCar", "deleteManyCar", "deleteOneCar", "findFirstCar", "findFirstCarOrThrow", "cars", "car", "getCar", "groupByCar", "updateManyCar", "updateOneCar", "upsertOneCar"],
    Company: ["aggregateCompany", "createManyCompany", "createOneCompany", "deleteManyCompany", "deleteOneCompany", "findFirstCompany", "findFirstCompanyOrThrow", "companies", "company", "getCompany", "groupByCompany", "updateManyCompany", "updateOneCompany", "upsertOneCompany"],
    Ride: ["aggregateRide", "createManyRide", "createOneRide", "deleteManyRide", "deleteOneRide", "findFirstRide", "findFirstRideOrThrow", "rides", "ride", "getRide", "groupByRide", "updateManyRide", "updateOneRide", "upsertOneRide"],
    RidePassengers: ["aggregateRidePassengers", "createManyRidePassengers", "createOneRidePassengers", "deleteManyRidePassengers", "deleteOneRidePassengers", "findFirstRidePassengers", "findFirstRidePassengersOrThrow", "findManyRidePassengers", "findUniqueRidePassengers", "findUniqueRidePassengersOrThrow", "groupByRidePassengers", "updateManyRidePassengers", "updateOneRidePassengers", "upsertOneRidePassengers"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateCarArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCarArgs: ["data", "skipDuplicates"],
    CreateOneCarArgs: ["data"],
    DeleteManyCarArgs: ["where"],
    DeleteOneCarArgs: ["where"],
    FindFirstCarArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCarOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCarArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCarArgs: ["where"],
    FindUniqueCarOrThrowArgs: ["where"],
    GroupByCarArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCarArgs: ["data", "where"],
    UpdateOneCarArgs: ["data", "where"],
    UpsertOneCarArgs: ["where", "create", "update"],
    AggregateCompanyArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCompanyArgs: ["data", "skipDuplicates"],
    CreateOneCompanyArgs: ["data"],
    DeleteManyCompanyArgs: ["where"],
    DeleteOneCompanyArgs: ["where"],
    FindFirstCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCompanyOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCompanyArgs: ["where"],
    FindUniqueCompanyOrThrowArgs: ["where"],
    GroupByCompanyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCompanyArgs: ["data", "where"],
    UpdateOneCompanyArgs: ["data", "where"],
    UpsertOneCompanyArgs: ["where", "create", "update"],
    AggregateRideArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyRideArgs: ["data", "skipDuplicates"],
    CreateOneRideArgs: ["data"],
    DeleteManyRideArgs: ["where"],
    DeleteOneRideArgs: ["where"],
    FindFirstRideArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstRideOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyRideArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueRideArgs: ["where"],
    FindUniqueRideOrThrowArgs: ["where"],
    GroupByRideArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyRideArgs: ["data", "where"],
    UpdateOneRideArgs: ["data", "where"],
    UpsertOneRideArgs: ["where", "create", "update"],
    AggregateRidePassengersArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyRidePassengersArgs: ["data", "skipDuplicates"],
    CreateOneRidePassengersArgs: ["data"],
    DeleteManyRidePassengersArgs: ["where"],
    DeleteOneRidePassengersArgs: ["where"],
    FindFirstRidePassengersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstRidePassengersOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyRidePassengersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueRidePassengersArgs: ["where"],
    FindUniqueRidePassengersOrThrowArgs: ["where"],
    GroupByRidePassengersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyRidePassengersArgs: ["data", "where"],
    UpdateOneRidePassengersArgs: ["data", "where"],
    UpsertOneRidePassengersArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    var _a;
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = (_a = resolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Car: relationResolvers.CarRelationsResolver,
    Ride: relationResolvers.RideRelationsResolver,
    RidePassengers: relationResolvers.RidePassengersRelationsResolver
};
const relationResolversInfo = {
    User: ["car", "driverRides", "passengerRides"],
    Car: ["driver"],
    Ride: ["driver", "passengers"],
    RidePassengers: ["passenger", "ride"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    var _a;
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = (_a = relationResolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    Car: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId"],
    Company: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    Ride: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId"],
    RidePassengers: ["id", "createdAt", "passengerId", "rideId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateCar: ["_count", "_avg", "_sum", "_min", "_max"],
    CarGroupBy: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateCompany: ["_count", "_avg", "_sum", "_min", "_max"],
    CompanyGroupBy: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateRide: ["_count", "_avg", "_sum", "_min", "_max"],
    RideGroupBy: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateRidePassengers: ["_count", "_avg", "_sum", "_min", "_max"],
    RidePassengersGroupBy: ["id", "createdAt", "passengerId", "rideId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["driverRides", "passengerRides"],
    UserCountAggregate: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "_all"],
    UserAvgAggregate: ["id", "latitude", "longitude", "number", "zipCode"],
    UserSumAggregate: ["id", "latitude", "longitude", "number", "zipCode"],
    UserMinAggregate: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    UserMaxAggregate: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CarCountAggregate: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId", "_all"],
    CarAvgAggregate: ["id", "year", "capacity", "driverId"],
    CarSumAggregate: ["id", "year", "capacity", "driverId"],
    CarMinAggregate: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId"],
    CarMaxAggregate: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId"],
    CompanyCountAggregate: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "_all"],
    CompanyAvgAggregate: ["id", "latitude", "longitude", "number", "zipCode"],
    CompanySumAggregate: ["id", "latitude", "longitude", "number", "zipCode"],
    CompanyMinAggregate: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CompanyMaxAggregate: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    RideCount: ["passengers"],
    RideCountAggregate: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId", "_all"],
    RideAvgAggregate: ["id", "kmToGoalLocation", "availableSeats", "driverId"],
    RideSumAggregate: ["id", "kmToGoalLocation", "availableSeats", "driverId"],
    RideMinAggregate: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId"],
    RideMaxAggregate: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId"],
    RidePassengersCountAggregate: ["id", "createdAt", "passengerId", "rideId", "_all"],
    RidePassengersAvgAggregate: ["id", "passengerId", "rideId"],
    RidePassengersSumAggregate: ["id", "passengerId", "rideId"],
    RidePassengersMinAggregate: ["id", "createdAt", "passengerId", "rideId"],
    RidePassengersMaxAggregate: ["id", "createdAt", "passengerId", "rideId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "car", "driverRides", "passengerRides"],
    UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "car", "driverRides", "passengerRides"],
    UserWhereUniqueInput: ["id"],
    UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CarWhereInput: ["AND", "OR", "NOT", "id", "brand", "model", "year", "plateNumber", "capacity", "driverId", "driver"],
    CarOrderByWithRelationInput: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId", "driver"],
    CarWhereUniqueInput: ["id", "driverId"],
    CarOrderByWithAggregationInput: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId", "_count", "_avg", "_max", "_min", "_sum"],
    CarScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "brand", "model", "year", "plateNumber", "capacity", "driverId"],
    CompanyWhereInput: ["AND", "OR", "NOT", "id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CompanyOrderByWithRelationInput: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CompanyWhereUniqueInput: ["id"],
    CompanyOrderByWithAggregationInput: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "_count", "_avg", "_max", "_min", "_sum"],
    CompanyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    RideWhereInput: ["AND", "OR", "NOT", "id", "kmToGoalLocation", "availableSeats", "status", "driverId", "driver", "passengers"],
    RideOrderByWithRelationInput: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId", "driver", "passengers"],
    RideWhereUniqueInput: ["id", "driverId"],
    RideOrderByWithAggregationInput: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId", "_count", "_avg", "_max", "_min", "_sum"],
    RideScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "kmToGoalLocation", "availableSeats", "status", "driverId"],
    RidePassengersWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "passengerId", "rideId", "passenger", "ride"],
    RidePassengersOrderByWithRelationInput: ["id", "createdAt", "passengerId", "rideId", "passenger", "ride"],
    RidePassengersWhereUniqueInput: ["id", "passengerId", "rideId"],
    RidePassengersOrderByWithAggregationInput: ["id", "createdAt", "passengerId", "rideId", "_count", "_avg", "_max", "_min", "_sum"],
    RidePassengersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "passengerId", "rideId"],
    UserCreateInput: ["createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "car", "driverRides", "passengerRides"],
    UserUpdateInput: ["createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "car", "driverRides", "passengerRides"],
    UserCreateManyInput: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    UserUpdateManyMutationInput: ["createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CarCreateInput: ["brand", "model", "year", "plateNumber", "capacity", "driver"],
    CarUpdateInput: ["brand", "model", "year", "plateNumber", "capacity", "driver"],
    CarCreateManyInput: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId"],
    CarUpdateManyMutationInput: ["brand", "model", "year", "plateNumber", "capacity"],
    CompanyCreateInput: ["name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CompanyUpdateInput: ["name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CompanyCreateManyInput: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CompanyUpdateManyMutationInput: ["name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    RideCreateInput: ["kmToGoalLocation", "availableSeats", "status", "driver", "passengers"],
    RideUpdateInput: ["kmToGoalLocation", "availableSeats", "status", "driver", "passengers"],
    RideCreateManyInput: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId"],
    RideUpdateManyMutationInput: ["kmToGoalLocation", "availableSeats", "status"],
    RidePassengersCreateInput: ["createdAt", "passenger", "ride"],
    RidePassengersUpdateInput: ["createdAt", "passenger", "ride"],
    RidePassengersCreateManyInput: ["id", "createdAt", "passengerId", "rideId"],
    RidePassengersUpdateManyMutationInput: ["createdAt"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    CarRelationFilter: ["is", "isNot"],
    RideListRelationFilter: ["every", "some", "none"],
    RidePassengersListRelationFilter: ["every", "some", "none"],
    RideOrderByRelationAggregateInput: ["_count"],
    RidePassengersOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    UserAvgOrderByAggregateInput: ["id", "latitude", "longitude", "number", "zipCode"],
    UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    UserSumOrderByAggregateInput: ["id", "latitude", "longitude", "number", "zipCode"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    UserRelationFilter: ["is", "isNot"],
    CarCountOrderByAggregateInput: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId"],
    CarAvgOrderByAggregateInput: ["id", "year", "capacity", "driverId"],
    CarMaxOrderByAggregateInput: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId"],
    CarMinOrderByAggregateInput: ["id", "brand", "model", "year", "plateNumber", "capacity", "driverId"],
    CarSumOrderByAggregateInput: ["id", "year", "capacity", "driverId"],
    CompanyCountOrderByAggregateInput: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CompanyAvgOrderByAggregateInput: ["id", "latitude", "longitude", "number", "zipCode"],
    CompanyMaxOrderByAggregateInput: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CompanyMinOrderByAggregateInput: ["id", "name", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country"],
    CompanySumOrderByAggregateInput: ["id", "latitude", "longitude", "number", "zipCode"],
    EnumRideStatusFilter: ["equals", "in", "notIn", "not"],
    RideCountOrderByAggregateInput: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId"],
    RideAvgOrderByAggregateInput: ["id", "kmToGoalLocation", "availableSeats", "driverId"],
    RideMaxOrderByAggregateInput: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId"],
    RideMinOrderByAggregateInput: ["id", "kmToGoalLocation", "availableSeats", "status", "driverId"],
    RideSumOrderByAggregateInput: ["id", "kmToGoalLocation", "availableSeats", "driverId"],
    EnumRideStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    RideRelationFilter: ["is", "isNot"],
    RidePassengersCountOrderByAggregateInput: ["id", "createdAt", "passengerId", "rideId"],
    RidePassengersAvgOrderByAggregateInput: ["id", "passengerId", "rideId"],
    RidePassengersMaxOrderByAggregateInput: ["id", "createdAt", "passengerId", "rideId"],
    RidePassengersMinOrderByAggregateInput: ["id", "createdAt", "passengerId", "rideId"],
    RidePassengersSumOrderByAggregateInput: ["id", "passengerId", "rideId"],
    CarCreateNestedOneWithoutDriverInput: ["create", "connectOrCreate", "connect"],
    RideCreateNestedManyWithoutDriverInput: ["create", "connectOrCreate", "createMany", "connect"],
    RidePassengersCreateNestedManyWithoutPassengerInput: ["create", "connectOrCreate", "createMany", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    StringFieldUpdateOperationsInput: ["set"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    CarUpdateOneWithoutDriverNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    RideUpdateManyWithoutDriverNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    RidePassengersUpdateManyWithoutPassengerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutCarInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutCarNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutDriverRidesInput: ["create", "connectOrCreate", "connect"],
    RidePassengersCreateNestedManyWithoutRideInput: ["create", "connectOrCreate", "createMany", "connect"],
    EnumRideStatusFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutDriverRidesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    RidePassengersUpdateManyWithoutRideNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutPassengerRidesInput: ["create", "connectOrCreate", "connect"],
    RideCreateNestedOneWithoutPassengersInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutPassengerRidesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    RideUpdateOneRequiredWithoutPassengersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumRideStatusFilter: ["equals", "in", "notIn", "not"],
    NestedEnumRideStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    CarCreateWithoutDriverInput: ["brand", "model", "year", "plateNumber", "capacity"],
    CarCreateOrConnectWithoutDriverInput: ["where", "create"],
    RideCreateWithoutDriverInput: ["kmToGoalLocation", "availableSeats", "status", "passengers"],
    RideCreateOrConnectWithoutDriverInput: ["where", "create"],
    RideCreateManyDriverInputEnvelope: ["data", "skipDuplicates"],
    RidePassengersCreateWithoutPassengerInput: ["createdAt", "ride"],
    RidePassengersCreateOrConnectWithoutPassengerInput: ["where", "create"],
    RidePassengersCreateManyPassengerInputEnvelope: ["data", "skipDuplicates"],
    CarUpsertWithoutDriverInput: ["update", "create"],
    CarUpdateWithoutDriverInput: ["brand", "model", "year", "plateNumber", "capacity"],
    RideUpsertWithWhereUniqueWithoutDriverInput: ["where", "update", "create"],
    RideUpdateWithWhereUniqueWithoutDriverInput: ["where", "data"],
    RideUpdateManyWithWhereWithoutDriverInput: ["where", "data"],
    RideScalarWhereInput: ["AND", "OR", "NOT", "id", "kmToGoalLocation", "availableSeats", "status", "driverId"],
    RidePassengersUpsertWithWhereUniqueWithoutPassengerInput: ["where", "update", "create"],
    RidePassengersUpdateWithWhereUniqueWithoutPassengerInput: ["where", "data"],
    RidePassengersUpdateManyWithWhereWithoutPassengerInput: ["where", "data"],
    RidePassengersScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "passengerId", "rideId"],
    UserCreateWithoutCarInput: ["createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "driverRides", "passengerRides"],
    UserCreateOrConnectWithoutCarInput: ["where", "create"],
    UserUpsertWithoutCarInput: ["update", "create"],
    UserUpdateWithoutCarInput: ["createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "driverRides", "passengerRides"],
    UserCreateWithoutDriverRidesInput: ["createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "car", "passengerRides"],
    UserCreateOrConnectWithoutDriverRidesInput: ["where", "create"],
    RidePassengersCreateWithoutRideInput: ["createdAt", "passenger"],
    RidePassengersCreateOrConnectWithoutRideInput: ["where", "create"],
    RidePassengersCreateManyRideInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutDriverRidesInput: ["update", "create"],
    UserUpdateWithoutDriverRidesInput: ["createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "car", "passengerRides"],
    RidePassengersUpsertWithWhereUniqueWithoutRideInput: ["where", "update", "create"],
    RidePassengersUpdateWithWhereUniqueWithoutRideInput: ["where", "data"],
    RidePassengersUpdateManyWithWhereWithoutRideInput: ["where", "data"],
    UserCreateWithoutPassengerRidesInput: ["createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "car", "driverRides"],
    UserCreateOrConnectWithoutPassengerRidesInput: ["where", "create"],
    RideCreateWithoutPassengersInput: ["kmToGoalLocation", "availableSeats", "status", "driver"],
    RideCreateOrConnectWithoutPassengersInput: ["where", "create"],
    UserUpsertWithoutPassengerRidesInput: ["update", "create"],
    UserUpdateWithoutPassengerRidesInput: ["createdAt", "updatedAt", "fname", "lname", "latitude", "longitude", "street", "number", "zipCode", "city", "state", "country", "car", "driverRides"],
    RideUpsertWithoutPassengersInput: ["update", "create"],
    RideUpdateWithoutPassengersInput: ["kmToGoalLocation", "availableSeats", "status", "driver"],
    RideCreateManyDriverInput: ["id", "kmToGoalLocation", "availableSeats", "status"],
    RidePassengersCreateManyPassengerInput: ["id", "createdAt", "rideId"],
    RideUpdateWithoutDriverInput: ["kmToGoalLocation", "availableSeats", "status", "passengers"],
    RidePassengersUpdateWithoutPassengerInput: ["createdAt", "ride"],
    RidePassengersCreateManyRideInput: ["id", "createdAt", "passengerId"],
    RidePassengersUpdateWithoutRideInput: ["createdAt", "passenger"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
