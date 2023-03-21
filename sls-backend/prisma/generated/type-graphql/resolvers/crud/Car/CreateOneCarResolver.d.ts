import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCarArgs } from "./args/CreateOneCarArgs";
import { Car } from "../../../models/Car";
export declare class CreateOneCarResolver {
    createOneCar(ctx: any, info: GraphQLResolveInfo, args: CreateOneCarArgs): Promise<Car>;
}
