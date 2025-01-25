/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { bikeServices } from '../product/bike.service';
import { orderServices } from './order.service';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import AppError from '../../errors/AppError';

const createOrder = catchAsync(async (req: Request, res: Response)=> {
  const { product, quantity, totalPrice } = req.body;
  const email = req.user.email;
  console.log(email);
  if (!email) {
    throw new AppError(400, "Invalid user")
  }

  const bike = await bikeServices.getSingleBike(product);
  console.log(bike);

  if (!bike) {
    throw new AppError(400, "Bike is not founded.")
  }
  if (bike?.quantity < quantity) {
    throw new AppError(400, `Insufficient stock. Only ${bike.quantity} item(s) left.`)
  }

  bike.quantity = bike.quantity - quantity;
  if (bike.quantity === 0) {
    bike.inStock = false;
  }
  await bike.save();

  const order = await orderServices.createOrder({
    email,
    product,
    quantity,
    totalPrice,
  });


  sendResponse(res, {
    data: order,
    message: 'Order successfully done',
    statusCode: 200,
    success: true,
    meta: null
  })

})



const findRevenue = catchAsync(async (req: Request, res: Response) => {
  const result = await orderServices.totalRevenue();

  sendResponse(res, {
    data: result,
    message: 'Revenue calculated successfully',
    statusCode: 200,
    success: true,
    meta: null
  })

})

export const OrderController = {
  createOrder,
  findRevenue,
};
