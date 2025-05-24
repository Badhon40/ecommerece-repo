import { model, Schema } from "mongoose";
import { IReview } from "./review.interface";


const reviewSchema = new Schema<IReview>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, { timestamps: true });


const ReviewModel = model<IReview>('Review', reviewSchema);
export default ReviewModel;