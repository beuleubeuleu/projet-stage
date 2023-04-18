import { Document }          from "mongoose";
import { IUser }             from "./InterfaceUser";

export interface IOrder extends Document {
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