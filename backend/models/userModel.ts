import mongoose from "mongoose"
const { Schema, model } = mongoose

interface IUser {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isAdmin: Boolean
}

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

const User = model<IUser>("User", userSchema)

export default User