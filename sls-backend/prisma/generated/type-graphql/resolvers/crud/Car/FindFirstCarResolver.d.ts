import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCarArgs } from "./args/FindFirstCarArgs";
import { Car } from "../../../models/Car";
export declare class FindFirstCarResolver {
    findFirstCar(ctx: any, info: GraphQLResolveInfo, args: FindFirstCarArgs): Promise<Car | null>;
}
