import Bike from '../product/bike.model';
import { TUser } from '../user/user.interface';
import { TOrderItem } from './order.interface';
import { Order } from './order.model';
import { orderUtils } from './order.utils';

const createOrder = async (user: TUser, payload: TOrderItem, client_ip: string) => {
  const items = payload.items
  console.log(items);


  items.forEach(async (item) => {
    await Bike.updateOne(
      { _id: item.product },
      { $inc: { quantity: -item.quantity } }
    );
  });


  let order = await Order.create({
    user: user._id,
    email: user.email,
    products: items,
    totalPrice: payload.totalPrice
  });


  // payment integration
  const shurjopayPayload = {
    amount: payload.totalPrice,
    order_id: order._id,
    currency: "BDT",
    customer_name: user.name,
    customer_address: "N/A",
    customer_email: user.email,
    customer_phone: "N/A",
    customer_city: "N/A",
    client_ip: client_ip || "127.0.0.1",
    
  };

  console.log({shurjopayPayload});

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);

  if (payment?.transactionStatus) {
    order = await order.updateOne({
      transaction: {
        id: payment.sp_order_id,
        transactionStatus: payment.transactionStatus,
      },
    });
  }

  return payment;

};

const totalRevenue = async () => {
  // const response = await Order.aggregate([
  //   {
  //     $addFields: {
  //       price:{$multiply:["$quantity","$totalPrice"]}
  //     }
  //   },
  //   {
  //     $group: {
  //       _id: "null",
  //       revenue:{$sum:"$price"}
  //     },
  //   },
  //   {
  //     $project:{
  //       totalRevenue: "$revenue",
  //       _id: 0
  //     }
  //   }

  // ]);
  const response = await Order.aggregate([
    {
      $group: {
        _id: 'null',
        revenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        totalRevenue: '$revenue',
        _id: 0,
      },
    },
  ]);
  return response[0] ? response[0] : { totalRevenue: 0 };
};

export const orderServices = {
  createOrder,
  totalRevenue,
};
