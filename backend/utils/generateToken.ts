import jwt from "jsonwebtoken"


const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "2h" })

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 2 * 60 * 60 * 1000 // 2h
    })
}

export default generateToken