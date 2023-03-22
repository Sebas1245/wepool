import { User } from "../models/User";
import { CompanyCount } from "../resolvers/outputs/CompanyCount";
export declare class Company {
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
