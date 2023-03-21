import { UserCreateNestedOneWithoutCarInput } from "../inputs/UserCreateNestedOneWithoutCarInput";
export declare class CarCreateInput {
    brand: string;
    model: string;
    year: number;
    plateNumber: string;
    capacity: number;
    driver: UserCreateNestedOneWithoutCarInput;
}
