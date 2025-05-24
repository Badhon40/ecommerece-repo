import { model, Schema } from "mongoose";
import { ICartItem } from "./cart.interface";


const cartSchema = new Schema<ICartItem>({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const CartModel = model<ICartItem>('Cart', cartSchema);
export default CartModel;