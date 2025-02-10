import express from "express"
import { PORT } from "./config/env.js"

import userRouter from "./Routes/user.routes.js"
import authRouter from "./Routes/Auth.routes.js"
import subscriptionRouter from "./Routes/subscription.routes.js"

const app = express()

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

app.get('/', (req, res) => {
  res.send('Welcome to Subcription Tracker API!')
})

app.listen(PORT, () => {
  console.log(`Server runnig on http://localhost:${PORT}`)
})

export default app 