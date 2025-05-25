
export const errorHandler = (err : any) =>{
    if(err.name ==="CastError"){
        return {
            statusCode: 400,
            message: "Invalid ID format"
        }
    }
    if(err.name === "ValidationError"){
        const errors = Object.values(err.errors).map((el: any) => el.message);
        return {
            statusCode: 400,
            message: errors.join(", ")
        }
    }
    if(err.code === 11000){
        return {
            statusCode: 400,
            message: `Duplicate field value: ${Object.keys(err.keyValue).join(", ")}`
        }
    }
    // if(err.name === "JsonWebTokenError"){
    //     return {
    //         statusCode: 401,
    //         message: "Invalid token"
    //     }
    // }
    // if(err.name === "TokenExpiredError"){
    //     return {
    //         statusCode: 401,
    //         message: "Token expired"
    //     }
    // }
    return {
        statusCode: 500,
        message: "Internal Server Error"
    }
}
