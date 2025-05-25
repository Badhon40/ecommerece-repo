import { Response } from 'express';



interface ISendResponseData<T> {
    status?: boolean;
    statusCode?: number;
    message?: string;
    data?: T | T[] | null;
}

const sendResponse = <T>(
    res: Response,
    statusCode: number,
    data: ISendResponseData<T>
): void => {
    res.status(statusCode).json({
        status: true,
        statusCode: data?.statusCode || statusCode,
        message: data?.message || "Operation successful",
        data: data?.data || null,
    });
}


export default sendResponse;