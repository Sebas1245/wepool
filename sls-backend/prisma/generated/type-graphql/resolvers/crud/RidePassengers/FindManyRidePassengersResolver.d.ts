import type { GraphQLResolveInfo } from "graphql";
import { FindManyRidePassengersArgs } from "./args/FindManyRidePassengersArgs";
import { RidePassengers } from "../../../models/RidePassengers";
export declare class FindManyRidePassengersResolver {
    findManyRidePassengers(ctx: any, info: GraphQLResolveInfo, args: FindManyRidePassengersArgs): Promise<RidePassengers[]>;
}
