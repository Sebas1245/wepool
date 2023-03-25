import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCarArgs } from "./args/FindUniqueCarArgs";
import { Car } from "../../../models/Car";
export declare class FindUniqueCarResolver {
    car(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCarArgs): Promise<Car | null>;
}
