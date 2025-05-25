import express, { Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/user/user.routes'
import productRouter from './app/modules/product/product.routes'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import orderRouter from './app/modules/order/order.routes'

const app =express()

app.use(express.json())
app.use(cors())

app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/order", orderRouter)


app.get('/', (req : Request, res: Response)=>{
    res.send("Ecommerce Server in running")
})

// Global error handler

app.use(globalErrorHandler)

export default app
