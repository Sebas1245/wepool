import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRidePassengersArgs } from "./args/CreateOneRidePassengersArgs";
import { RidePassengers } from "../../../models/RidePassengers";
export declare class CreateOneRidePassengersResolver {
    createOneRidePassengers(ctx: any, info: GraphQLResolveInfo, args: CreateOneRidePassengersArgs): Promise<RidePassengers>;
}
