import { Document }          from "mongoose";
import {IOrderItem} from "./IinterfaceOrderItem";
import { IUser }             from "./InterfaceUser";

export interface IOrder extends Document {
  orderItems: IOrderItem[],
  shippingAddress1: string,
  shippingAddress2: string,
  city: string,
  zip: string,
  country: string,
  phone: string,
  status: string,
  totalPrice:number,
  user: IUser,
  dateOrdered: Date
}