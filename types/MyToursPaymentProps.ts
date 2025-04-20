export interface MyToursTourIdProps {
    _id: string;
    TourName: string;
  }
  
  export interface MyToursBookTourProps {
    _id: string;
    TourId: MyToursTourIdProps;
    UserId: string;
    DepartureDate: string;
    QuantityAdults: number;
    QuantityChildren: number;
    TotalPrice: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface MyToursPaymentProps {
    _id: string;
    BookTourId: MyToursBookTourProps; // Định nghĩa kiểu dữ liệu riêng
    UserId: {
      _id: string;
      UserName: string;
      Email: string;
      Phone: string;
    };
    PaymentMethod?: string;
    TransactionId?: string;
    Amount?: number;
    PaymentStatus?: boolean;
    createdAt?: string | Date;
    updatedAt?: string | Date;
  }