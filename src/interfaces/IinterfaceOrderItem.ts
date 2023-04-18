import { Document } from "mongoose";
import { IProduct } from "./InterfaceProduct";

export interface IOrderItem extends Document{
  product: IProduct[],
  quantity: number
}