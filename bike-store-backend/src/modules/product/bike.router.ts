import express from 'express';
import { BikeController } from './bike.controller';
import dataValidator from '../../middlewares/dataValidator';
import bikeValidationSchema from './bike.zod.validation';

const router = express.Router();

router.post(
    '/products', 
    dataValidator(bikeValidationSchema),
    BikeController.createBikeItem);
router.get('/products', BikeController.getAllBikes);
router.get('/products/:id', BikeController.getSingleBike);
router.put('/products/:id', BikeController.updateBike);
router.delete('/products/:id', BikeController.deleteBike);

export const BikeRouter = router;
