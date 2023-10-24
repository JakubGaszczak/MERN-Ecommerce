import express from "express";
import { registerUser, authUser, logoutUser, getUserProfile, updateUserProfile, getAllUsers, deleteUser } from "../controllers/userController";
import { protect, admin } from "../middleware/authMiddleware"

const router = express.Router()

router.post("/register", registerUser)
router.post("/auth", authUser)
router.post("/logout", logoutUser)
router.get("/profile", protect, getUserProfile)
router.put("/profile", protect, updateUserProfile)
router.get("/", protect, admin, getAllUsers)
router.delete("/", protect, admin, deleteUser)

export default router