import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCarArgs } from "./args/DeleteOneCarArgs";
import { Car } from "../../../models/Car";
export declare class DeleteOneCarResolver {
    deleteOneCar(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCarArgs): Promise<Car | null>;
}
