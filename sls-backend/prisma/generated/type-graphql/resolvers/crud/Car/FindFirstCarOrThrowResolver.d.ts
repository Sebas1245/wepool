import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCarOrThrowArgs } from "./args/FindFirstCarOrThrowArgs";
import { Car } from "../../../models/Car";
export declare class FindFirstCarOrThrowResolver {
    findFirstCarOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCarOrThrowArgs): Promise<Car | null>;
}
