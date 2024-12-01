const express = require('express')
const fs = require("fs")
const birds = require("./router/Birds.js")

const app = express()
const port = 3000


app.use(express.static("public")) 
app.use('/Birds', birds)

// Middelware use karne se jab mei koi requeste send karta ho web ye get etc pe jane se pahale yaha atah toh mei req se data ya koi bhi fn uspe run karwa sakta hu 

//Middelware1
app.use((req, res, next ) => {

  console.log("M1")
  console.log(req.header) 
  req.dru = "You are in Dru's server"   // create veriable 

  next() // next is a fn which let it to traverse the next middelware or the response 
})

//Middelware
app.use((req, res, next ) => {

  console.log(`M2 ${Date.now()} is a ${req.method}`)
  fs.appendFileSync("log.txt", `M2 ${Date.now()} is a ${req.method} \n`)
  req.dru = "Dru's server"   // create veriable 

  // res.send("It's m2 ") // ye req se yahi res send kardega phir next pe jane ki try karega jiski need nahi hh as res send hogay hh so error 

  next() // next is a fn which let it to traverse the next middelware or the response 
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send("Hello WRLD... "+ req.dru)  //Using veriable 
})

app.get('/contact', (req, res) => {
  res.send('Hello WRLD This is a Contact Page !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})