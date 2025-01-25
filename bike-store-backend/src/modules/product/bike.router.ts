import express from 'express';
import { BikeController } from './bike.controller';
import dataValidator from '../../middlewares/dataValidator';
import bikeValidationSchema from './bike.zod.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../../interface/global';

const router = express.Router();

router.post(
    '/products',
    auth(USER_ROLE.admin),
    dataValidator(bikeValidationSchema),
    BikeController.createBikeItem
);

router.get('/products', BikeController.getAllBikes);

router.get('/products/:id', BikeController.getSingleBike);

router.put(
    '/products/:id',
    auth(USER_ROLE.admin),
    BikeController.updateBike
);

router.delete(
    '/products/:id',
    auth(USER_ROLE.admin),
    BikeController.deleteBike
);

export const BikeRouter = router;
