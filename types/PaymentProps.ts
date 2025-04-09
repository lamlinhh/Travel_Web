export interface PaymentProps {
    _id: string;
    BookTourId: string;        // hoặc BookTourProps nếu populate
    UserId: string;
    tourName?: string;
    PaymentMethod?: string;
    TransactionId?: string;
    Amount?: number;
    PaymentStatus?: boolean;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}
