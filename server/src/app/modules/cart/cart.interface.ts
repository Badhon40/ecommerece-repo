import { ObjectId } from "mongoose";



export interface ICartItem {
    productId: ObjectId; // Product ID
    name: string; // Product name
    price: number; // Product price
    quantity: number; // Quantity of the product in the cart
    image: string; // Product image URL
}