import Bike from '../product/bike.model';
import { TUser } from '../user/user.interface';
import { TOrderItem } from './order.interface';
import { Order } from './order.model';
import { orderUtils } from './order.utils';

const createOrder = async (user: TUser, payload: TOrderItem, client_ip: string) => {
  const items = payload.items

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

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);

  if (payment?.transactionStatus) {
    order = await order.updateOne({
      transaction: {
        id: payment.sp_order_id,
        transactionStatus: payment.transactionStatus,
      },
    });
  }

  return payment.checkout_url;

};


const verifyPayment = async (order_id: string) => {
  const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id);
  if (verifiedPayment.length) {
    await Order.findOneAndUpdate(
      {
        "transaction.id": order_id,
      },
      {
        "transaction.bank_status": verifiedPayment[0].bank_status,
        "transaction.sp_code": verifiedPayment[0].sp_code,
        "transaction.sp_message": verifiedPayment[0].sp_message,
        "transaction.transactionStatus": verifiedPayment[0].transaction_status,
        "transaction.method": verifiedPayment[0].method,
        "transaction.date_time": verifiedPayment[0].date_time,
        status:
          verifiedPayment[0].bank_status == "Success"
            ? "Paid"
            : verifiedPayment[0].bank_status == "Failed"
              ? "Pending"
              : verifiedPayment[0].bank_status == "Cancel"
                ? "Cancelled"
                : "",
      }
    );
  }

  return verifiedPayment;
};

const getAllOrders = async () => {
  const res = await Order.find();
  return res;
}
const getAllOrderOfUser = async (email: string) => {
  const res = await Order.find({ email: email });
  return res;
}

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
  verifyPayment,
  getAllOrders,
  getAllOrderOfUser
};
