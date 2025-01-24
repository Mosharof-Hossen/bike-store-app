/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { TErrorSource } from "../interface/error";


let errorSources: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {

    let statusCode  = 500;
    let message = "Something Went wrong";

    


    return res.status(statusCode).json({
        success:false,
        message: message,
        errorSources,
        stack: null,
        err
    })


}

export default globalErrorHandler;