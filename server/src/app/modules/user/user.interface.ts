import { ICartItem } from "../cart/cart.interface";
import { IOrder } from "../order/order.interface";



export interface IWishlist{
    productId: string;
}

export interface IUser{
    name:string;
    email:string;
    password:string;
    phone:string;
    address:string;
    role: "user" | "admin";
    image?: string;
    cart?: ICartItem[];
    wishlist?: IWishlist[];
    orders: IOrder[];
    isBlocked?: boolean;
}