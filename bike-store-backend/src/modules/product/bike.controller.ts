import { Request, Response } from 'express';
import { bikeServices } from './bike.service';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';

const createBikeItem = catchAsync(async (req: Request, res: Response) => {
  const bikeData = req.body;
  // console.log(bikeData);
  const result = await bikeServices.createBikeItem(bikeData);
  sendResponse(res, {
    data: result,
    message: 'Bike Created successfully',
    statusCode: 200,
    success: true,
    meta: null
  })
})


const getAllBikes = catchAsync(async (req: Request, res: Response) => {
  const result = await bikeServices.getAllBikes(req.query);
  sendResponse(res, {
    data: result.result,
    message: "All Bikes Retrieved successfully",
    statusCode: 200,
    success: true,
    meta: result.meta
  })
})


const getSingleBike = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bikeServices.getSingleBike(id);
  sendResponse(res, {
    data: result,
    message: 'Bike Retrieved successfully',
    statusCode: 200,
    success: true,
    meta: null
  })

})


const updateBike = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await bikeServices.updateBike(id, updatedData);

  sendResponse(res, {
    data: result,
    message: 'Bike updated successfully',
    statusCode: 200,
    success: true,
    meta: null
  })
})


const deleteBike = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await bikeServices.deleteBike(id);

  sendResponse(res, {
    data: [],
    message: 'Bike deleted successfully',
    statusCode: 200,
    success: true,
    meta: null
  })
});

export const BikeController = {
  createBikeItem,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
};
