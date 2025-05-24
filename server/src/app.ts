import express, { Request, Response } from 'express'
import { userRouter } from './app/modules/user/user.routes'

const app =express()

app.use(express.json())
app.use(cors())

app.use("/api",userRouter)

app.get('/', (req : Request, res: Response)=>{
    res.send("Server in running")
})


export default app

function cors(): any {
    throw new Error('Function not implemented.')
}
