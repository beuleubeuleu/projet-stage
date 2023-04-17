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
}                  from "../controller/userController";
  import { isAuth, isAdmin } from "../middlewares/auth";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:idUser", isAuth, getUserById);
usersRouter.post("/", isAdmin, createUser);
usersRouter.put("/:idUser", isAuth, updateUser);
usersRouter.delete("/:idUser", isAuth, deleteUser);
usersRouter.get("/get/count", isAdmin, getUserCount);

usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);

export default usersRouter;
