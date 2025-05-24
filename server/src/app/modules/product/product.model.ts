import { model, Schema } from 'mongoose';
import { IProduct} from './product.interface';
import ReviewModel from '../review/review.model';




export const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
        default: null,
    },
    quantity: {
        type: Number,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        enum: ["men", "women", "children"],
        required: true,
    },
    subCategory: {
        type: String,
        enum: ["saree", "kurta", "dress", "shirt", "pant", "t-shirt", "shoes", "accessories", "others"],
        required: false,
    },
    brand: {
        type: String,
        required: true,
    },
    ratings: {
        type: Number,
        required: true,
    },
    numReviews: {
        type: Number,
        required: true,
    },
    reviews: {
        type: [ReviewModel.schema],
        default: [],
        ref: 'Review',
    },
    
}, {
    timestamps: true,
});


const ProductModel = model<IProduct>('Product', productSchema);
export default ProductModel;