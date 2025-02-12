import express from "express"
import { PORT } from "./config/env.js"
import connectTODatabse from "./databse/mongodb.js"
import cookieParser from "cookie-parser"

import userRouter from "./Routes/user.routes.js"
import authRouter from "./Routes/Auth.routes.js"
import subscriptionRouter from "./Routes/subscription.routes.js"
import errorMiddelware from "./middlewares/error.middleware.js"

const app = express()

// app.use(express.json());
// app.use(express.urlencoded({ extended: false}))
// app.use(cookieParser())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

app.use(errorMiddelware)

app.get('/', (req, res) => {
  res.send('Welcome to Subcription Tracker API!')
})

app.listen(PORT, async () => {
  console.log(`Server runnig on http://localhost:${PORT}`)

  await connectTODatabse()
})

export default app 