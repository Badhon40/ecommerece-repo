import { ErrorRequestHandler } from "express";
import config from "../../config";
import { errorHandler } from "../utils/errorHandling";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    // Use your errorHandler utility to get proper status and message
    const { statusCode, message } = errorHandler(err);

    type IErrorSource = {
        path: string | string[] | number;
        message: string;
    }[];

    let errorSource: IErrorSource = [
        {
            path: " ",
            message: message || "Something went wrong"
        }
    ];

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        stack: config.node_env === "development" ? err.stack : undefined,
        errorSource
    });
};

export default globalErrorHandler;