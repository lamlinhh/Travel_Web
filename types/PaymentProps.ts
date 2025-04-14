export interface BookTourProps {
  TourId: {
    TourName: string;
  };
  DepartureDate: string;
  QuantityAdults?: number;
  QuantityChildren?: number;
}

export interface PaymentProps {
  _id: string;
  BookTourId: BookTourProps;
  UserId: string;
  tourName?: string;
  PaymentMethod?: string;
  TransactionId?: string;
  Amount?: number;
  PaymentStatus?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  TourId: string;
}
