import express from "express";
import { registerUser, authUser, logoutUser } from "../controllers/userController";

const router = express.Router()

router.post("/register", registerUser)
router.post("/auth", authUser)
router.post("/logout", logoutUser)

export default router