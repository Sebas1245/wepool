import { RidePassengersCreateManyPassengerInputEnvelope } from "../inputs/RidePassengersCreateManyPassengerInputEnvelope";
import { RidePassengersCreateOrConnectWithoutPassengerInput } from "../inputs/RidePassengersCreateOrConnectWithoutPassengerInput";
import { RidePassengersCreateWithoutPassengerInput } from "../inputs/RidePassengersCreateWithoutPassengerInput";
import { RidePassengersWhereUniqueInput } from "../inputs/RidePassengersWhereUniqueInput";
export declare class RidePassengersCreateNestedManyWithoutPassengerInput {
    create?: RidePassengersCreateWithoutPassengerInput[] | undefined;
    connectOrCreate?: RidePassengersCreateOrConnectWithoutPassengerInput[] | undefined;
    createMany?: RidePassengersCreateManyPassengerInputEnvelope | undefined;
    connect?: RidePassengersWhereUniqueInput[] | undefined;
}
