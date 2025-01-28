import Bike from '../product/bike.model';
import { TUser } from '../user/user.interface';
import { TOrderItem } from './order.interface';
import { Order } from './order.model';

const createOrder = async (user: TUser, payload: TOrderItem) => {
  const items = payload.items
  console.log(items);


  items.forEach(async (item) => {
    await Bike.updateOne(
      { _id: item.product },
      { $inc: { quantity: -item.quantity } }
    );
  });


  const response = await Order.create({
    user: user._id,
    email: user.email,
    products: items,
    totalPrice: payload.totalPrice
  });
  return response;


  // const { product, quantity, totalPrice } = req.body;
  // const email = req.user.email;
  // console.log(email);
  // if (!email) {
  //   throw new AppError(400, "Invalid user")
  // }

  // const bike = await bikeServices.getSingleBike(product);
  // console.log(bike);

  // if (!bike) {
  //   throw new AppError(400, "Bike is not founded.")
  // }
  // if (bike?.quantity < quantity) {
  //   throw new AppError(400, `Insufficient stock. Only ${bike.quantity} item(s) left.`)
  // }

  // bike.quantity = bike.quantity - quantity;
  // if (bike.quantity === 0) {
  //   bike.inStock = false;
  // }
  // await bike.save();
  // const response = await Order.create(payload);
  // return response;
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
