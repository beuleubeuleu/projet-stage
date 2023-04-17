import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import { IUser }                           from "../interfaces/InterfaceUser";

type DecodedToken = {
  userId: string;
  iat: number;
  exp: number;
}

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from header
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed. Token missing.' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken; // Verify token
    const user: IUser | null = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({ message: 'Access Denied.' });
    }

    req.user = user; // Attach user to request for later use
    next(); // Move to next middleware/controller
  } catch (err) {
    return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
  }
};

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from header
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed. Token missing.' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken; // Verify token
    const user: IUser | null = await User.findById(decodedToken.userId);
    if (!user || !user.isAdmin) {
      return res.status(401).json({ message: 'Access Denied.' });
    }

    req.user = user; // Attach user to request for later use
    next(); // Move to next middleware/controller
  } catch (err) {
    return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
  }
};