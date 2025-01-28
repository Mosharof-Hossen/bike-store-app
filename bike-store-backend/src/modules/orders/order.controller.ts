/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderServices } from './order.service';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserModel } from '../user/user.model';
import AppError from '../../errors/AppError';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const email = req.user.email;
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    throw new AppError(400, "Login Again")
  }
  const order = await orderServices.createOrder(user, req.body, req.ip!);

  sendResponse(res, {
    data: order,
    message: 'Order successfully done',
    statusCode: 200,
    success: true,
    meta: null
  })
})

const verifyPayment = catchAsync(async (req, res) => {
  const order = await orderServices.verifyPayment(req.params.order_id as string);

  sendResponse(res, {
    data: order,
    message: "Order verified successfully",
    statusCode: 200,
    success: true,
    meta: null
  })
});


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
  verifyPayment
};
