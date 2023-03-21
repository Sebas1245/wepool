import type { GraphQLResolveInfo } from "graphql";
import { Car } from "../../../models/Car";
import { User } from "../../../models/User";
export declare class CarRelationsResolver {
    driver(car: Car, ctx: any, info: GraphQLResolveInfo): Promise<User>;
}
