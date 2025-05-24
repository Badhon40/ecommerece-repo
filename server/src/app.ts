import express, { Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/user/user.routes'

const app =express()

app.use(express.json())
app.use(cors())

app.use("/api/user", userRouter)


app.get('/', (req : Request, res: Response)=>{
    res.send("Ecommerce Server in running")
})


export default app
