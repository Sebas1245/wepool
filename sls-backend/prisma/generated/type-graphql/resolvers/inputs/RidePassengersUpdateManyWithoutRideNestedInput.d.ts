import { RidePassengersCreateManyRideInputEnvelope } from "../inputs/RidePassengersCreateManyRideInputEnvelope";
import { RidePassengersCreateOrConnectWithoutRideInput } from "../inputs/RidePassengersCreateOrConnectWithoutRideInput";
import { RidePassengersCreateWithoutRideInput } from "../inputs/RidePassengersCreateWithoutRideInput";
import { RidePassengersScalarWhereInput } from "../inputs/RidePassengersScalarWhereInput";
import { RidePassengersUpdateManyWithWhereWithoutRideInput } from "../inputs/RidePassengersUpdateManyWithWhereWithoutRideInput";
import { RidePassengersUpdateWithWhereUniqueWithoutRideInput } from "../inputs/RidePassengersUpdateWithWhereUniqueWithoutRideInput";
import { RidePassengersUpsertWithWhereUniqueWithoutRideInput } from "../inputs/RidePassengersUpsertWithWhereUniqueWithoutRideInput";
import { RidePassengersWhereUniqueInput } from "../inputs/RidePassengersWhereUniqueInput";
export declare class RidePassengersUpdateManyWithoutRideNestedInput {
    create?: RidePassengersCreateWithoutRideInput[] | undefined;
    connectOrCreate?: RidePassengersCreateOrConnectWithoutRideInput[] | undefined;
    upsert?: RidePassengersUpsertWithWhereUniqueWithoutRideInput[] | undefined;
    createMany?: RidePassengersCreateManyRideInputEnvelope | undefined;
    set?: RidePassengersWhereUniqueInput[] | undefined;
    disconnect?: RidePassengersWhereUniqueInput[] | undefined;
    delete?: RidePassengersWhereUniqueInput[] | undefined;
    connect?: RidePassengersWhereUniqueInput[] | undefined;
    update?: RidePassengersUpdateWithWhereUniqueWithoutRideInput[] | undefined;
    updateMany?: RidePassengersUpdateManyWithWhereWithoutRideInput[] | undefined;
    deleteMany?: RidePassengersScalarWhereInput[] | undefined;
}
