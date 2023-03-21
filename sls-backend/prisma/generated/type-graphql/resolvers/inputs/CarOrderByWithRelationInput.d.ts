import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class CarOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    brand?: "asc" | "desc" | undefined;
    model?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    plateNumber?: "asc" | "desc" | undefined;
    capacity?: "asc" | "desc" | undefined;
    driverId?: "asc" | "desc" | undefined;
    driver?: UserOrderByWithRelationInput | undefined;
}
