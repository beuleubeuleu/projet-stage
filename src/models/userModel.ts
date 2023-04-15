import { Schema, model } from "mongoose";
import { IUser }         from "../interfaces/InterfaceUser";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  phone: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  street: { type: String, default: "" },
  apartment: { type: String, default: "" },
  zip: { type: String, default: "" },
  city: { type: String, default: "" },
  country: { type: String, default: "" }
})

const User = model<IUser>('User', userSchema);

export default User