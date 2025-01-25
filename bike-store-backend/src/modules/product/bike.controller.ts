import { Request, Response } from 'express';
import { bikeServices } from './bike.service';
import config from '../../config';
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
    data: result,
    message: "All Bikes Retrieved successfully",
    statusCode: 200,
    success: true,
    meta: null
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


const updateBike = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await bikeServices.updateBike(id, updatedData);
    res.status(200).json({
      status: true,
      message: 'Bike updated successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
      stack: config.node_env == 'development' ? err.stack : undefined,
    });
  }
};
const deleteBike = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await bikeServices.deleteBike(id);
    res.status(200).json({
      status: true,
      message: 'Bike deleted successfully',
      data: {},
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
      stack: config.node_env == 'development' ? err.stack : undefined,
    });
  }
};

export const BikeController = {
  createBikeItem,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
};
