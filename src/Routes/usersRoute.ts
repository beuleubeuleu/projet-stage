import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserCount,
  registerUser,
  loginUser
} from "../controller/userController";
import { authenticateToken } from "../middlewares/auth";

const userRouter = Router();

userRouter.get("/", authenticateToken, getUsers);
userRouter.get("/:id", authenticateToken, getUserById);
userRouter.post("/", createUser);
userRouter.put("/:id", authenticateToken, updateUser);
userRouter.delete("/:id", authenticateToken, deleteUser);
userRouter.get("/get/count", authenticateToken, getUserCount);

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
