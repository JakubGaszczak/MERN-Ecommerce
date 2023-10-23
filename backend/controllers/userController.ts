import { Request, Response } from "express"
import generateToken from "../utils/generateToken"
import User from "../models/userModel"
import asyncHandler from "../middleware/asyncHandler"

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body as {
        firstName: string, 
        lastName: string,
        email: string,
        password: string
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(404)
        throw new Error("User already exists")
    }

    const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })

    if (user) {
        generateToken(res, user._id)

        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }

})

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler( async(req: Request, res: Response) => {
    const { email, password } = req.body as {
        email: string,
        password: string
    }

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)

        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }
})


// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = (req: Request, res: Response) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: "Logged out successfully" })
}


// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private


// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private


// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin


// @desc    Delete user
// @route   Delete /api/users
// @access  Private/Admin

export { registerUser, authUser, logoutUser }