
import { IReview } from "../review/review.interface";


export interface IProduct {
    name: string;
    description: string;
    price: number;
    discountedPrice?: number | null;
    quantity: number;
    images: string[];
    category: "men" | "women" | "children";
    subCategory?: "saree" | "kurta" | "dress"  | "shirt" | "pant" | "t-shirt" | "shoes" | "accessories" | "others";
    brand: string;
    ratings: number;
    numReviews: number;
    reviews: IReview[];
}
    