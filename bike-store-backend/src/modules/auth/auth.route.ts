import { Router } from "express";
import dataValidator from "../../middlewares/dataValidator";
import { authValidation } from "./auth.validation";
import { authController } from "./auth.controller";

const router = Router();

router.post(
    "/login",
    dataValidator(authValidation.loginValidationSchema),
    authController.loginUser
)


export const authRouter = router;