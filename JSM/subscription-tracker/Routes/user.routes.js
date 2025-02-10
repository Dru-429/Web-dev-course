import { Router } from "express";

const userRouter = Router()

userRouter.get('/', (req, res) => {
    res.send({
        title: "GET all the uers"
    })
})

userRouter.get('/:id', (req, res)=> {
    res.send({
        title: 'GEt a user by ID '
    })
})

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