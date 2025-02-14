import { Router } from "express";
import authorize from "../middlewares/auth.middelware.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => {
    res.send({
        title: "GET all the subscription"
    })
}) 


subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription details' }));

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send({
        title: "UPDATE subscription"
    })
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({
        title: "DELETE subscription"
    })
})

subscriptionRouter.get('/user/:id',authorize, getUserSubscription)

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({
        title: "CANCEL subscription"
    })
})

subscriptionRouter.get('/upcoming-renwals', (req, res) => {
    res.send({
        title: "GET upcoming renwals subscription"
    })
})

export default subscriptionRouter