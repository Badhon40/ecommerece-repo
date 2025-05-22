import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";


const cartSchema = new Schema({
    productId:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
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
        type: [cartSchema],
        default: []
    },
    wishlist: {
        type: [String],
        default: []
    },
    isBlocked: {
        type: Boolean,
        default: false
    }

},{
    timestamps: true
})

const UserModel = model<IUser>("User", UserSchema);
export default UserModel;