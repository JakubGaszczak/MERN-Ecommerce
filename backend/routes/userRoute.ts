import express from "express";
import {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} from "../controllers/userController";
import { protect, admin } from "../middleware/authMiddleware";

const router = express.Router();

router
  .route("/")
  .get(protect, admin, getAllUsers)
  .delete(protect, admin, deleteUser);
router.route("/register").post(registerUser);
router.route("/auth").post(authUser);
router.route("/logout").post(logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
