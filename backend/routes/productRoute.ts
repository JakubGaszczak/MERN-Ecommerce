import express from "express"
import { addProduct, createReview, deleteProduct, getAllProducts, getProductById, getProductsByCategory, getTopRated } from "../controllers/productController"
import { protect, admin } from "../middleware/authMiddleware"
const router = express.Router()

router.post("/", protect, admin, addProduct)
router.delete("/:id", protect, admin, deleteProduct)
router.get("/", getAllProducts)
router.get("/top", getTopRated)
router.post("/:category", getProductsByCategory)
router.get("/:id", getProductById)
router.post("/:id/reviews", protect, createReview)

export default router