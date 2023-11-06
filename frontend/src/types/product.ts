
export interface Product {
    _id: string,
    name: string,
    description: string,
    image: string,
    price: number,
    qty: number,
    category: string,
    weight: number,
    materials: string,
    rating: number,
    numReviews: number
}

export interface Review {
    user: string,
    name: string,
    comment: string,
    rating: number,
    createdAt: string
}