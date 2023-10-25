import express from "express"
import { addProduct, deleteProduct, getAllProducts } from "../controllers/productController"
import { protect, admin } from "../middleware/authMiddleware"
const router = express.Router()

router.post("/", protect, admin, addProduct)
router.delete("/:id", protect, admin, deleteProduct)
router.get("/", getAllProducts)

export default router