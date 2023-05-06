declare global{
    
    type User = {
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        fname: string;
        lname: string;
        latitude?: number;
        longitude?: number;
        street: string;
        number: number;
        zipCode: number;
        city: string;
        state: string;
        country: string;
        phoneNumber: string;
        car?: Car;
        carId?: number;
        driverRides?: Ride[];
        passengerRides?: RidePassengers[];
        company: Company;
        companyId: number;
        _count?: UserCount;
    }

    /**
     * Typescript enums autom starts at 0:
     * Open = 0, 
     * Closed = 1,
    */
   enum RideStatus {
       Open, 
       Closed,
   }

   enum StartingPoint {
        DRIVER, 
        COMPANY,
   }
    

    type Ride = {
        id: number;
        kmToGoalLocation: number;
        availableSeats: number;
        status: RideStatus;
        startsAt: StartingPoint;
        driver: User;
        driverId: number;
        passengers?: RidePassengers[];
        _count?: RideCount | null;
    }

    type Car = {
        id: number;
        brand: string;
        model: string;
        year: number;
        plateNumber: string;
        capacity: number;
        color: string;
        driver: User;
        driverId: number;
    }

    type Company = {
        id: number;
        name: string;
        latitude?: number | null;
        longitude?: number | null;
        street: string;
        number: number;
        zipCode: number;
        city: string;
        state: string;
        country: string;
        users?: User[];
        _count?: CompanyCount | null;
    }

    type RidePassengers = {
        id: number;
        createdAt: Date;
        passenger?: User;
        passengerId: number;
        ride: Ride;
        rideId: number;
    }
}

export{}