import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { UserDocument } from "../types/user";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

userSchema.methods.matchPassword = async function (
  this: any,
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (this: UserDocument, next) {
  if (!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = model<UserDocument>("User", userSchema);

export default User;
