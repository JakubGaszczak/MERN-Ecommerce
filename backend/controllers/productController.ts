import Product from "../models/productModel";
import asyncHandler from "../middleware/asyncHandler";
import { Request, Response } from "express";

// @desc    Add new product
// @route   POST /api/products
// @access  Private/Admin
const addProduct = asyncHandler(async (req: Request, res: Response) => {
  const { name, description, image, price, category, qty, weight, materials } =
    req.body;

  const product = new Product({
    name: name,
    description: description,
    image: image,
    price: price,
    qty: qty,
    category: category,
    weight: weight,
    materials: materials,
  });

  await product.save();

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(500);
    throw new Error("Failed to create product");
  }
});

// @desc    Delete product by ID
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getAllProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find({});

  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error("Products not found");
  }
});

// @desc    Get products by category
// @route   GET /api/products/category
// @access  Public
const getProductsByCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { category } = req.params;

    const products = await Product.find({ category: category });

    if (products) {
      res.json(products);
    } else {
      res.status(404);
      throw new Error("Products not found");
    }
  }
);

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params
  const product = await Product.findById(id)

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create new rewiev
// @route   POST /api/products/:id/reviews
// @access  Private
const createReview = asyncHandler(async (req: Request, res: Response) => {
  const { comment, rating } = req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      user: req.user._id,
      name: req.user.firstName,
      comment: comment,
      rating: rating,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});


// @desc    Get product reviews
// @route   GET /api/products/:id/reviews
// @access  Public
const getProductReviews = asyncHandler( async(req: Request, res: Response) => {
  const { id } = req.params
  const product = await Product.findById(id)

  res.json(product?.reviews)
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopRated = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});

export {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  createReview,
  getTopRated,
  getProductsByCategory,
  getProductReviews
};
