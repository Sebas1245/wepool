import type { GraphQLResolveInfo } from "graphql";
import { AggregateCarArgs } from "./args/AggregateCarArgs";
import { AggregateCar } from "../../outputs/AggregateCar";
export declare class AggregateCarResolver {
    aggregateCar(ctx: any, info: GraphQLResolveInfo, args: AggregateCarArgs): Promise<AggregateCar>;
}
