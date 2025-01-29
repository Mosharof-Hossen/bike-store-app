import express from 'express';
import { OrderController } from './order.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../../interface/global';
import dataValidator from '../../middlewares/dataValidator';
import orderValidationSchema from './order.zod.validation';

const router = express.Router();

router.post(
    '/product',
    dataValidator(orderValidationSchema),
    auth(USER_ROLE.customer),
    OrderController.createOrder);

router.put(
    '/verify/:order_id',
    auth(USER_ROLE.admin),
    OrderController.verifyPayment);

router.get(
    '/',
    auth(USER_ROLE.admin),
    OrderController.getAllOrders
);
router.get(
    '/user',
    auth(USER_ROLE.customer),
    OrderController.getAllOrdersOfUser
);


router.get(
    '/product/revenue',
    auth(USER_ROLE.admin),
    OrderController.findRevenue
);

export const orderRouter = router;
