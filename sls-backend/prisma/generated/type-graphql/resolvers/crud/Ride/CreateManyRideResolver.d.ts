import type { GraphQLResolveInfo } from "graphql";
import { CreateManyRideArgs } from "./args/CreateManyRideArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRideResolver {
    createManyRide(ctx: any, info: GraphQLResolveInfo, args: CreateManyRideArgs): Promise<AffectedRowsOutput>;
}
