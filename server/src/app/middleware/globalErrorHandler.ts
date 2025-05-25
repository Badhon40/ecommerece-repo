import { NextFunction, Request, Response } from "express";
import config from "../../config";
import { errorHandler } from "../utils/errorHandling";


const globalErrorHandler = ( err : any , req: Request , res : Response , next: NextFunction) => {
    const { statusCode , message} = errorHandler(err)

    res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    stack: config.node_env === "development" ? err.stack : undefined,
    }); 

}

export default globalErrorHandler;