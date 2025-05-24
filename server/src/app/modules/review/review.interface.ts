import { ObjectId } from "mongoose";


export interface IReview {
    userId: ObjectId;
    name: string;
    rating: number;
    comment: string;
}