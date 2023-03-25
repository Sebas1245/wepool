import { RideCreateManyDriverInputEnvelope } from "../inputs/RideCreateManyDriverInputEnvelope";
import { RideCreateOrConnectWithoutDriverInput } from "../inputs/RideCreateOrConnectWithoutDriverInput";
import { RideCreateWithoutDriverInput } from "../inputs/RideCreateWithoutDriverInput";
import { RideScalarWhereInput } from "../inputs/RideScalarWhereInput";
import { RideUpdateManyWithWhereWithoutDriverInput } from "../inputs/RideUpdateManyWithWhereWithoutDriverInput";
import { RideUpdateWithWhereUniqueWithoutDriverInput } from "../inputs/RideUpdateWithWhereUniqueWithoutDriverInput";
import { RideUpsertWithWhereUniqueWithoutDriverInput } from "../inputs/RideUpsertWithWhereUniqueWithoutDriverInput";
import { RideWhereUniqueInput } from "../inputs/RideWhereUniqueInput";
export declare class RideUpdateManyWithoutDriverNestedInput {
    create?: RideCreateWithoutDriverInput[] | undefined;
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput[] | undefined;
    upsert?: RideUpsertWithWhereUniqueWithoutDriverInput[] | undefined;
    createMany?: RideCreateManyDriverInputEnvelope | undefined;
    set?: RideWhereUniqueInput[] | undefined;
    disconnect?: RideWhereUniqueInput[] | undefined;
    delete?: RideWhereUniqueInput[] | undefined;
    connect?: RideWhereUniqueInput[] | undefined;
    update?: RideUpdateWithWhereUniqueWithoutDriverInput[] | undefined;
    updateMany?: RideUpdateManyWithWhereWithoutDriverInput[] | undefined;
    deleteMany?: RideScalarWhereInput[] | undefined;
}
