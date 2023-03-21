import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneRidePassengersArgs } from "./args/UpsertOneRidePassengersArgs";
import { RidePassengers } from "../../../models/RidePassengers";
export declare class UpsertOneRidePassengersResolver {
    upsertOneRidePassengers(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRidePassengersArgs): Promise<RidePassengers>;
}
