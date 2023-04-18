import { Request, Response } from "express"
import Order                 from "../models/orderModel"
import { IOrder }            from "../interfaces/InterfaceOrder";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders: IOrder[] = await Order.find()
    res.status(200).json({ orders })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "internal server error" })
  }
}

export const getOneOrder = async (req: Request, res: Response) => {
  try {
    const order: IOrder = await Order.findById(req.params.idOrder)
    if ( !order ) {
      return res.status(404).json({ message: "Order not found" })
    }
    //only the buyer can see the order
    const userId: string = req.user.id;
    let orderUserId: string = order.user._id.toString();
    if ( userId !== orderUserId && !req.user.isAdmin ) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    res.status(200).json({ order })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Internal server error" })
  }
}

export const createOrder = async (req: Request, res: Response) => {
  try {
    const {
            shippingAddress1,
            shippingAddress2,
            city,
            zip,
            country,
            phone,
            totalPrice
          } = req.body;
    const user = req.user
    const order: IOrder = await Order.create({
      shippingAddress1,
      shippingAddress2,
      city,
      zip,
      country,
      phone,
      totalPrice,
      user
    })
    res.status(201).json({ order })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "internal server error" })
  }
}


export const updateOrder = async (req: Request, res: Response) => {

}

export const deleteOrder = async (req: Request, res: Response) => {

}

export const getOrderCount = async (req: Request, res: Response) => {

}