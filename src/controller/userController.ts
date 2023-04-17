import { Request, Response } from "express";
import bcrypt                from "bcryptjs"
import jwt                   from "jsonwebtoken"
import User                  from "../models/userModel";
import { IUser }             from "../interfaces/InterfaceUser";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getUserById = () => {

}
export const createUser = async (req: Request, res: Response) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if ( existingUser ) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      passwordHash,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
      street: req.body.street,
      apartment: req.body.apartment,
      zip: req.body.zip,
      city: req.body.city,
      country: req.body.country
    });

    const newUser = await user.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const updateUser = () => {

}
export const deleteUser = () => {

}
export const getUserCount = () => {

}
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone, street, apartment, zip, city, country } = req.body;

    const existingUser = await User.findOne({ email });
    if ( existingUser ) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      passwordHash,
      phone,
      street,
      apartment,
      zip,
      city,
      country
    });

    const newUser = await user.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user: IUser | null = await User.findOne({ email })

  if ( !user ) {
    return res.status(404).json({ message: "User Not Found" })
  }

  const isPasswordMatch = await bcrypt.compare(password, user.passwordHash)
  if ( !isPasswordMatch ) {
    return res.status(401).json({ message: "invalid password" })
  }

  const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET, { expiresIn: "1h" }
  )
  res.status(200).json({ token })
}