import express from "express"
import { addProduct, createReview, deleteProduct, getAllProducts, getProductById, getProductsByCategory, getTopRated } from "../controllers/productController"
import { protect, admin } from "../middleware/authMiddleware"
const router = express.Router()

router.route("/").get(getAllProducts).post(protect, admin, addProduct)
router.route("/top").get(getTopRated)
router.route("/:category").get(getProductsByCategory)
router.route("/:id/reviews").post(protect, createReview)
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct)

export default router