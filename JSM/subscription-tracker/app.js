import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to Subcription Tracker API!')
})

app.listen(3000, () => {
  console.log('Server runnig on http://localhost:3000')
})

export default app 