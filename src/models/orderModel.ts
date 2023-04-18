import { model, Schema } from "mongoose";
import { IOrder }        from "../interfaces/InterfaceOrder";

const orderSchema = new Schema<IOrder>({
  shippingAddress1: { type: String, required: true },
  shippingAddress2: { type: String },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, required: true, default: "Traitement en cours" },
  totalPrice: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  dateOrdered: { type: Date, default: Date.now }
})

const Order = model<IOrder>("Order", orderSchema)
export default Order