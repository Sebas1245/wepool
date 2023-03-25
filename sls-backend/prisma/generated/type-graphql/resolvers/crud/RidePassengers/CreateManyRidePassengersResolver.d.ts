import type { GraphQLResolveInfo } from "graphql";
import { CreateManyRidePassengersArgs } from "./args/CreateManyRidePassengersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRidePassengersResolver {
    createManyRidePassengers(ctx: any, info: GraphQLResolveInfo, args: CreateManyRidePassengersArgs): Promise<AffectedRowsOutput>;
}
