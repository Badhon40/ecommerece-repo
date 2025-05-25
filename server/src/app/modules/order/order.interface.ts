import { ObjectId } from "mongoose";

export interface IOrder{
    userId : ObjectId;
    products : {
        productId : ObjectId;
        quantity: number;
    }[];
    totalPrice: number;
    shippingAddress?: string;
    paymentMethod?: "credit_card" | "paypal" | "bank_transfer";
    paymentStatus?: "pending" | "completed" | "failed";
    orderDate?: Date;
    status?: "pending" | "shipped" | "delivered" | "cancelled";

}