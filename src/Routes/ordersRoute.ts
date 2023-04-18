import { Router } from "express";
import {getAllOrders, getOneOrder, createOrder, updateOrder, deleteOrder, getOrderCount} from "../controller/orderController"

const ordersRouter = Router();

ordersRouter.get("/", getAllOrders);
ordersRouter.get("/:idOrder", getOneOrder);
ordersRouter.post("/", createOrder);
ordersRouter.put("/:idOrder", updateOrder);
ordersRouter.delete("/:idOrder", deleteOrder);
ordersRouter.get("/get/count", getOrderCount);

export default ordersRouter;
