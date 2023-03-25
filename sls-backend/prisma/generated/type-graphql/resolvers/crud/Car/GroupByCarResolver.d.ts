import type { GraphQLResolveInfo } from "graphql";
import { GroupByCarArgs } from "./args/GroupByCarArgs";
import { CarGroupBy } from "../../outputs/CarGroupBy";
export declare class GroupByCarResolver {
    groupByCar(ctx: any, info: GraphQLResolveInfo, args: GroupByCarArgs): Promise<CarGroupBy[]>;
}
