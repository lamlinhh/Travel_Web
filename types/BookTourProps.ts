export interface BookTourProps {
    _id: string;
    TourId: string;
    UserId: string;
    DepartureDate: string | Date;
    QuantityAdults: number;
    QuantityChildren: number;
    TotalPrice?: number;
}
