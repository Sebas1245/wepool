declare global{
    
    type User = {
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        fname: string;
        lname: string;
        latitude?: number | null;
        longitude?: number | null;
        street?: string | null;
        number?: number | null;
        zipCode?: number | null;
        city?: string | null;
        state?: string | null;
        country?: string | null;
        car?: Car | null;
        carId?: number | null;
        driverRides?: Ride[] | null;
        passengerRides?: RidePassengers[] | null;
        company?: Company | null;
        companyId: number;
        _count?: UserCount | null;
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

   enum RideStartsAt {
        Driver, 
        Company,
   }
    

    type Ride = {
        id: number;
        kmToGoalLocation: number;
        availableSeats: number;
        status: RideStatus;
        startsAt: RideStartsAt;
        driver?: User;
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
        driver?: User;
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
        ride?: Ride;
        rideId: number;
    }
}

export{}