import { RidePassengersCreateManyRideInputEnvelope } from "../inputs/RidePassengersCreateManyRideInputEnvelope";
import { RidePassengersCreateOrConnectWithoutRideInput } from "../inputs/RidePassengersCreateOrConnectWithoutRideInput";
import { RidePassengersCreateWithoutRideInput } from "../inputs/RidePassengersCreateWithoutRideInput";
import { RidePassengersWhereUniqueInput } from "../inputs/RidePassengersWhereUniqueInput";
export declare class RidePassengersCreateNestedManyWithoutRideInput {
    create?: RidePassengersCreateWithoutRideInput[] | undefined;
    connectOrCreate?: RidePassengersCreateOrConnectWithoutRideInput[] | undefined;
    createMany?: RidePassengersCreateManyRideInputEnvelope | undefined;
    connect?: RidePassengersWhereUniqueInput[] | undefined;
}
