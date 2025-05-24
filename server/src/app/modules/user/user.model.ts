import { model, Schema } from "mongoose";
import { IUser, IWishlist } from "./user.interface";
import CartModel from "../cart/cart.model";
import OrderModel from "../order/order.model";
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
        default: null
    },
    cart: {
        type: [CartModel.schema],
        ref: 'Cart',
        default: []
    },
    wishlist: {
        type: [wishlistSchema],
        default: []
    },
    orders: [{
        type: [OrderModel.schema],
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