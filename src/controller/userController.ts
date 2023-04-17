import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import User        from "../models/userModel";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const getUserById = () => {

}
export const createUser = () => {

}
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
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
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
      country,
    });

    const newUser = await user.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const loginUser = () => {

}