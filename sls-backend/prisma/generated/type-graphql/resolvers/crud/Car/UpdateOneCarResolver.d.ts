import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCarArgs } from "./args/UpdateOneCarArgs";
import { Car } from "../../../models/Car";
export declare class UpdateOneCarResolver {
    updateOneCar(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCarArgs): Promise<Car | null>;
}
