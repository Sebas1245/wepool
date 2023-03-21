import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCarOrThrowArgs } from "./args/FindUniqueCarOrThrowArgs";
import { Car } from "../../../models/Car";
export declare class FindUniqueCarOrThrowResolver {
    getCar(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCarOrThrowArgs): Promise<Car | null>;
}
