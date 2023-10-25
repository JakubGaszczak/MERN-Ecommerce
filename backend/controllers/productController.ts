import Product from "../models/productModel";
import asyncHandler from "../middleware/asyncHandler";
import { Request, Response } from "express";

// @desc    Add new product
// @route   POST /api/products
// @access  Private/Admin
const addProduct = asyncHandler(async (req: Request, res: Response) => {
  const {
    name,
    description,
    image,
    price,
    category,
    qty,
    weight,
    dimensions,
    materials,
  } = req.body;

  const product = new Product({
    name: name,
    description: description,
    image: image,
    price: price,
    qty: qty,
    category: category,
    weight: weight,
    dimensions: dimensions,
    materials: materials
  })

  await product.save()

  if (product) {
    res.status(201).json(product)
  } else {
    res.status(500)
    throw new Error("Failed to create product")
  }
});

// @desc    Delete product by ID
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler( async(req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.deleteOne()
        res.json({ message: "Product removed" })
    } else {
        res.status(404)
        throw new Error("Product not found")
    }
})

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getAllProducts = asyncHandler( async(req: Request, res: Response) => {
    const products = await Product.find({})

    if (products) {
        res.json(products)
    } else {
        res.status(404)
        throw new Error("Products not found")
    }
})

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public


// @desc    Create new rewiev
// @route   POST /api/products/:id/reviews
// @access  Private

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public

export { addProduct, deleteProduct, getAllProducts }