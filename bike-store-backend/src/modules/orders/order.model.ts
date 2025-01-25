import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    product: { type: Schema.Types.ObjectId, required: true, ref: "Bike" },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: {
      required: true,
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered"],
      default: "Pending"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Order = model<TOrder>('Order', orderSchema);
