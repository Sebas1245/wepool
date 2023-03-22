export declare class RideCreateManyDriverInput {
    id?: number | undefined;
    kmToGoalLocation: number;
    availableSeats: number;
    status: "OPEN" | "CLOSED";
    startsAt: "DRIVER" | "COMPANY";
}
