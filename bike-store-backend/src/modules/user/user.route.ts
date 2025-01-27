import { Router } from "express";
import { UserControllers } from "./user.controller";
import dataValidator from "../../middlewares/dataValidator";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../../interface/global";
import { UserValidationSchema } from "./user.validation";

const router = Router()

router.get(
    "/all-user",
    auth(USER_ROLE.admin),
    UserControllers.getAllUser
)

router.post(
    "/registration",
    dataValidator(UserValidationSchema.createUserValidationSchema),
    UserControllers.userRegistration
)

router.post(
    "/status-change/:id",
    auth(USER_ROLE.admin),
    dataValidator(UserValidationSchema.updateUserValidationSchema),
    UserControllers.userStatusChange
)
router.get(
    "/:id",
    auth(USER_ROLE.admin, USER_ROLE.customer),
    UserControllers.getSingleUser
)

export const userRouter = router;