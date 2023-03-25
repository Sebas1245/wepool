import { RideCreateManyDriverInputEnvelope } from "../inputs/RideCreateManyDriverInputEnvelope";
import { RideCreateOrConnectWithoutDriverInput } from "../inputs/RideCreateOrConnectWithoutDriverInput";
import { RideCreateWithoutDriverInput } from "../inputs/RideCreateWithoutDriverInput";
import { RideWhereUniqueInput } from "../inputs/RideWhereUniqueInput";
export declare class RideCreateNestedManyWithoutDriverInput {
    create?: RideCreateWithoutDriverInput[] | undefined;
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput[] | undefined;
    createMany?: RideCreateManyDriverInputEnvelope | undefined;
    connect?: RideWhereUniqueInput[] | undefined;
}
