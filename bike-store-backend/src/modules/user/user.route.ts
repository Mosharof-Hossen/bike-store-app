import { Router } from "express";
import { UserControllers } from "./user.controller";
import dataValidator from "../../middlewares/dataValidator";
import createUserValidationSchema from "./user.validation";

const router = Router()

router.post(
    "/registration",
    dataValidator(createUserValidationSchema),
    UserControllers.userRegistration
)

export const userRouter = router;