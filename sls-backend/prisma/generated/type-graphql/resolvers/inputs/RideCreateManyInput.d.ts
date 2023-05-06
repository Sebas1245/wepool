export declare class RideCreateManyInput {
    id?: number | undefined;
    kmToGoalLocation: number;
    availableSeats: number;
    status: "OPEN" | "CLOSED";
    startsAt: "DRIVER" | "COMPANY";
    date: Date;
    driverId: number;
}
