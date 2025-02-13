import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middelware.js";

const userRouter = Router()

userRouter.get('/', getUsers)

userRouter.get('/:id', authorize, getUser)

userRouter.post('/', (req,res) => {
    res.send({
        title: "CREATE new user using POST method"
    })
})

userRouter.put('/:id', (req,res) => {
    res.send({
        title: "Update user using PUT method"
    })
})

userRouter.delete('/:id', (req,res) => {
    res.send({
        title: "DELETE user using delete method"
    })
})

export default userRouter