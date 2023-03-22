declare global{
    
    type User = {
        _id: number, 
        name: string, 
        lastname: string, 
        email: string,
        password: string,
        phoneNumber: string,
    }

    type Driver = {
        _id: number, 
        name: string, 
        lastname: string, 
        home_latitude: number, 
        home_longitude: number,
    }

    type Rider = {
        _id: number, 
        name: string, 
        lastname: string, 
        home_latitude: number, 
        home_longitude: number,
    }

    type Ride = {
        _id: number, 
        driver_id: Driver._id,
        driver: Driver,
        available_seats: number,
        status: string,
    }

    type Car = {
        _id: number, 
        driver_id: Driver._id,
        driver: Driver,
        capacity: number,
        brand: string,
        model: string,
        year: number,
        plate_number: string,
    }
}

export{}