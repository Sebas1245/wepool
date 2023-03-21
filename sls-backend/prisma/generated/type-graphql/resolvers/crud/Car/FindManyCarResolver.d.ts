import type { GraphQLResolveInfo } from "graphql";
import { FindManyCarArgs } from "./args/FindManyCarArgs";
import { Car } from "../../../models/Car";
export declare class FindManyCarResolver {
    cars(ctx: any, info: GraphQLResolveInfo, args: FindManyCarArgs): Promise<Car[]>;
}
