import express from "express"
import { addProduct, createReview, deleteProduct, getAllProducts, getProductById, getTopRated } from "../controllers/productController"
import { protect, admin } from "../middleware/authMiddleware"
const router = express.Router()

router.post("/", protect, admin, addProduct)
router.delete("/:id", protect, admin, deleteProduct)
router.get("/", getAllProducts)
router.get("/top", getTopRated)
router.get("/:id", getProductById)
router.post("/:id/reviews", protect, createReview)

export default router