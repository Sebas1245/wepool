import { RideCreateInput } from "../../../inputs/RideCreateInput";
import { RideUpdateInput } from "../../../inputs/RideUpdateInput";
import { RideWhereUniqueInput } from "../../../inputs/RideWhereUniqueInput";
export declare class UpsertOneRideArgs {
    where: RideWhereUniqueInput;
    create: RideCreateInput;
    update: RideUpdateInput;
}
