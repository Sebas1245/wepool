import { RidePassengersCreateManyPassengerInputEnvelope } from "../inputs/RidePassengersCreateManyPassengerInputEnvelope";
import { RidePassengersCreateOrConnectWithoutPassengerInput } from "../inputs/RidePassengersCreateOrConnectWithoutPassengerInput";
import { RidePassengersCreateWithoutPassengerInput } from "../inputs/RidePassengersCreateWithoutPassengerInput";
import { RidePassengersScalarWhereInput } from "../inputs/RidePassengersScalarWhereInput";
import { RidePassengersUpdateManyWithWhereWithoutPassengerInput } from "../inputs/RidePassengersUpdateManyWithWhereWithoutPassengerInput";
import { RidePassengersUpdateWithWhereUniqueWithoutPassengerInput } from "../inputs/RidePassengersUpdateWithWhereUniqueWithoutPassengerInput";
import { RidePassengersUpsertWithWhereUniqueWithoutPassengerInput } from "../inputs/RidePassengersUpsertWithWhereUniqueWithoutPassengerInput";
import { RidePassengersWhereUniqueInput } from "../inputs/RidePassengersWhereUniqueInput";
export declare class RidePassengersUpdateManyWithoutPassengerNestedInput {
    create?: RidePassengersCreateWithoutPassengerInput[] | undefined;
    connectOrCreate?: RidePassengersCreateOrConnectWithoutPassengerInput[] | undefined;
    upsert?: RidePassengersUpsertWithWhereUniqueWithoutPassengerInput[] | undefined;
    createMany?: RidePassengersCreateManyPassengerInputEnvelope | undefined;
    set?: RidePassengersWhereUniqueInput[] | undefined;
    disconnect?: RidePassengersWhereUniqueInput[] | undefined;
    delete?: RidePassengersWhereUniqueInput[] | undefined;
    connect?: RidePassengersWhereUniqueInput[] | undefined;
    update?: RidePassengersUpdateWithWhereUniqueWithoutPassengerInput[] | undefined;
    updateMany?: RidePassengersUpdateManyWithWhereWithoutPassengerInput[] | undefined;
    deleteMany?: RidePassengersScalarWhereInput[] | undefined;
}
