
export interface ICart{
    productId: string;
    quantity: number;
}

export interface IUser{
    name:string;
    email:string;
    password:string;
    phone:string;
    address:string;
    role: "user" | "admin";
    image?: string;
    cart?: ICart[];
    wishlist?: string[];
    isBlocked?: boolean;
}