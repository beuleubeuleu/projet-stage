import { Router } from "express";
import {getAllOrders, getOneOrder, createOrder, updateOrder, deleteOrder, getOrderCount} from "../controller/orderController"
import { isAdmin, isAuth }                                                               from "../middlewares/auth";

const ordersRouter = Router();

ordersRouter.get("/",isAdmin, getAllOrders);
ordersRouter.get("/:idOrder",isAuth, getOneOrder);
ordersRouter.post("/", isAuth, createOrder);
ordersRouter.put("/:idOrder",isAdmin, updateOrder);
ordersRouter.delete("/:idOrder",isAdmin, deleteOrder);
ordersRouter.get("/get/count",isAdmin, getOrderCount);

export default ordersRouter;
