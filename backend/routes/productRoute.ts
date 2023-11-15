import express from "express"
import { addProduct, createReview, deleteProduct, getAllProducts, getProductById, getProductReviews, getProductsByCategory, getTopRated, updateProduct } from "../controllers/productController"
import { protect, admin } from "../middleware/authMiddleware"
const router = express.Router()

router.route("/").get(getAllProducts).post(protect, admin, addProduct).put(protect, admin, updateProduct)
router.route("/top").get(getTopRated)
router.route("/:category").get(getProductsByCategory)
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct)
router.route("/:id/reviews").get(getProductReviews).post(protect, createReview)

export default router