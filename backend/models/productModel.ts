import { Schema, model } from "mongoose"
import { ProductDocument } from "../types/product"

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    materials: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    }
},
    { timestamps: true }
)

const Product = model<ProductDocument>("Product", productSchema)

export default Product