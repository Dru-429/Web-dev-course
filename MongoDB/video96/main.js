import mongoose from "mongoose";
import express from "express"
import { Todo } from "./model/Todo.js"

let connect = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({   
      title:"Web dev HTML canvas ",
      desc: "Do it now ",
      isDone: false      
    })
    todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 