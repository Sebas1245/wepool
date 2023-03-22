import type { GraphQLResolveInfo } from "graphql";
import { AggregateRidePassengersArgs } from "./args/AggregateRidePassengersArgs";
import { CreateManyRidePassengersArgs } from "./args/CreateManyRidePassengersArgs";
import { CreateOneRidePassengersArgs } from "./args/CreateOneRidePassengersArgs";
import { DeleteManyRidePassengersArgs } from "./args/DeleteManyRidePassengersArgs";
import { DeleteOneRidePassengersArgs } from "./args/DeleteOneRidePassengersArgs";
import { FindFirstRidePassengersArgs } from "./args/FindFirstRidePassengersArgs";
import { FindFirstRidePassengersOrThrowArgs } from "./args/FindFirstRidePassengersOrThrowArgs";
import { FindManyRidePassengersArgs } from "./args/FindManyRidePassengersArgs";
import { FindUniqueRidePassengersArgs } from "./args/FindUniqueRidePassengersArgs";
import { FindUniqueRidePassengersOrThrowArgs } from "./args/FindUniqueRidePassengersOrThrowArgs";
import { GroupByRidePassengersArgs } from "./args/GroupByRidePassengersArgs";
import { UpdateManyRidePassengersArgs } from "./args/UpdateManyRidePassengersArgs";
import { UpdateOneRidePassengersArgs } from "./args/UpdateOneRidePassengersArgs";
import { UpsertOneRidePassengersArgs } from "./args/UpsertOneRidePassengersArgs";
import { RidePassengers } from "../../../models/RidePassengers";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRidePassengers } from "../../outputs/AggregateRidePassengers";
import { RidePassengersGroupBy } from "../../outputs/RidePassengersGroupBy";
export declare class RidePassengersCrudResolver {
    aggregateRidePassengers(ctx: any, info: GraphQLResolveInfo, args: AggregateRidePassengersArgs): Promise<AggregateRidePassengers>;
    createManyRidePassengers(ctx: any, info: GraphQLResolveInfo, args: CreateManyRidePassengersArgs): Promise<AffectedRowsOutput>;
    createOneRidePassengers(ctx: any, info: GraphQLResolveInfo, args: CreateOneRidePassengersArgs): Promise<RidePassengers>;
    deleteManyRidePassengers(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRidePassengersArgs): Promise<AffectedRowsOutput>;
    deleteOneRidePassengers(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRidePassengersArgs): Promise<RidePassengers | null>;
    findFirstRidePassengers(ctx: any, info: GraphQLResolveInfo, args: FindFirstRidePassengersArgs): Promise<RidePassengers | null>;
    findFirstRidePassengersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRidePassengersOrThrowArgs): Promise<RidePassengers | null>;
    findManyRidePassengers(ctx: any, info: GraphQLResolveInfo, args: FindManyRidePassengersArgs): Promise<RidePassengers[]>;
    findUniqueRidePassengers(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRidePassengersArgs): Promise<RidePassengers | null>;
    findUniqueRidePassengersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRidePassengersOrThrowArgs): Promise<RidePassengers | null>;
    groupByRidePassengers(ctx: any, info: GraphQLResolveInfo, args: GroupByRidePassengersArgs): Promise<RidePassengersGroupBy[]>;
    updateManyRidePassengers(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRidePassengersArgs): Promise<AffectedRowsOutput>;
    updateOneRidePassengers(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRidePassengersArgs): Promise<RidePassengers | null>;
    upsertOneRidePassengers(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRidePassengersArgs): Promise<RidePassengers>;
}