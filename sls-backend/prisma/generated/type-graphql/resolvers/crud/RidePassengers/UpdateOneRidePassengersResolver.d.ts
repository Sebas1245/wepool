import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneRidePassengersArgs } from "./args/UpdateOneRidePassengersArgs";
import { RidePassengers } from "../../../models/RidePassengers";
export declare class UpdateOneRidePassengersResolver {
    updateOneRidePassengers(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRidePassengersArgs): Promise<RidePassengers | null>;
}
