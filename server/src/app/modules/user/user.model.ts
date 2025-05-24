import { model, Schema } from "mongoose";
import { IUser, IWishlist } from "./user.interface";
import{ cartSchema } from "../cart/cart.model";
import { orderSchema } from "../order/order.model";
//const bcrypt = require('bcrypt');



const wishlistSchema = new Schema<IWishlist>({
    productId:{
        type: String,
        required: true
    }
})

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [ "user", "admin"],
        default: "user"
    },
    image: {
        type: String,
    },
    cart: {
        type: [cartSchema],
        ref: 'Cart',
        default: []
    },
    wishlist: {
        type: [wishlistSchema],
        default: []
    },
    orders: [{
        type: [orderSchema],
        ref: 'Order',
        default: []
    }],
    isBlocked: {
        type: Boolean,
        default: false
    }

},{
    timestamps: true
})

const UserModel = model<IUser>("User", UserSchema);
export default UserModel;