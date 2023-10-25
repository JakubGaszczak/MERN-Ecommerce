import { Model, Document } from "mongoose";

export interface Product {
    name: string,
    description: string,
    image: string,
    price: number,
    qty: number,
    category: string,
    rating: number,
    numReviews: number
}

export interface Review {
    user: string,
    name: string,
    rating: number,
    comment: string
}

interface ProductAndReview extends Product {
    user: string,
    reviews: Review[]
}

export interface ProductDocument extends ProductAndReview, Document {}

export interface ProductModel extends Model<ProductDocument> {}


