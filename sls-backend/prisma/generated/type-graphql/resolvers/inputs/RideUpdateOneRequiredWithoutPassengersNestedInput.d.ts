import { RideCreateOrConnectWithoutPassengersInput } from "../inputs/RideCreateOrConnectWithoutPassengersInput";
import { RideCreateWithoutPassengersInput } from "../inputs/RideCreateWithoutPassengersInput";
import { RideUpdateWithoutPassengersInput } from "../inputs/RideUpdateWithoutPassengersInput";
import { RideUpsertWithoutPassengersInput } from "../inputs/RideUpsertWithoutPassengersInput";
import { RideWhereUniqueInput } from "../inputs/RideWhereUniqueInput";
export declare class RideUpdateOneRequiredWithoutPassengersNestedInput {
    create?: RideCreateWithoutPassengersInput | undefined;
    connectOrCreate?: RideCreateOrConnectWithoutPassengersInput | undefined;
    upsert?: RideUpsertWithoutPassengersInput | undefined;
    connect?: RideWhereUniqueInput | undefined;
    update?: RideUpdateWithoutPassengersInput | undefined;
}
