import { Request, Response } from "express"
import Order                 from "../models/orderModel"
import { IOrder }            from "../interfaces/InterfaceOrder";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders: IOrder[] = await Order.find().populate("orderItems")
    res.status(200).json({ orders })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "internal server error" })
  }
}

export const getOneOrder = async (req: Request, res: Response) => {

}

export const createOrder = async (req: Request, res: Response) => {

}

export const updateOrder = async (req: Request, res: Response) => {

}

export const deleteOrder = async (req: Request, res: Response) => {

}

export const getOrderCount = async (req: Request, res: Response) => {

}