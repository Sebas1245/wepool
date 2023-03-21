import { RideCreateOrConnectWithoutPassengersInput } from "../inputs/RideCreateOrConnectWithoutPassengersInput";
import { RideCreateWithoutPassengersInput } from "../inputs/RideCreateWithoutPassengersInput";
import { RideWhereUniqueInput } from "../inputs/RideWhereUniqueInput";
export declare class RideCreateNestedOneWithoutPassengersInput {
    create?: RideCreateWithoutPassengersInput | undefined;
    connectOrCreate?: RideCreateOrConnectWithoutPassengersInput | undefined;
    connect?: RideWhereUniqueInput | undefined;
}
