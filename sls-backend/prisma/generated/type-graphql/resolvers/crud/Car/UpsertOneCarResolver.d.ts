import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCarArgs } from "./args/UpsertOneCarArgs";
import { Car } from "../../../models/Car";
export declare class UpsertOneCarResolver {
    upsertOneCar(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCarArgs): Promise<Car>;
}
