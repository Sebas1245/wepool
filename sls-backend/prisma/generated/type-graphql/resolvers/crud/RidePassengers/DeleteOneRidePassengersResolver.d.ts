import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneRidePassengersArgs } from "./args/DeleteOneRidePassengersArgs";
import { RidePassengers } from "../../../models/RidePassengers";
export declare class DeleteOneRidePassengersResolver {
    deleteOneRidePassengers(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRidePassengersArgs): Promise<RidePassengers | null>;
}
