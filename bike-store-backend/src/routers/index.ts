import { Router } from "express";
import { BikeRouter } from "../modules/product/bike.router";
import { orderRouter } from "../modules/orders/order.router";
import { userRouter } from "../modules/user/user.route";

const router = Router();

const moduleRouters = [
    {
        path: "/store",
        route: BikeRouter,
    },
    {
        path: "/order",
        route: orderRouter,
    },
    {
        path: "/user",
        route: userRouter,
    },
    
]

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;