const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public")) // use to serve static file 
app.use('/blog', blog)
app.use('/shop', shop)

//  REQUEST: GET POST PUT DELETE

// GET: "Give me this information."
// POST: "Here's some new data, add it."
// PUT: "Here's updated data, replace the existing one."   
// DELETE: "Remove this data."

//get Request : by default 
//              put things in the url 
//              data limit: 8kb 
app.get('/', (req, res) => {
    res.send('hello WRLD 2 ! ')
    console.log("Hey a GET Req is Hit ")
})

//Post Request :use to share sensitive data, HTML data, etc to server
//              data limit: Large Files 


app.post('/', (req, res) => {     // to test this post @ enpoint : / method1: HTML Page==bekar method2:  
    res.send('hello WRLD POST ! ')  // Yeah it can be seen on the web dev console page ..
    console.log("Hey a Post Req is Hit ")
})


//PUT Request :use to Update

app.put('/', (req, res) => {
    res.send('hello WRLD PUT ! ')
    console.log("Hey a PUT Req is Hit ")
})


// //CHAINING : put all the same end point hitter togehter 
// app.get('/', (req, res) => {
//     res.send('hello WRLD 2 ! ')
//     console.log("Hey a GET Req is Hit ")
// }).post('/', (req, res) => {     // to test this post @ enpoint : / method1: HTML Page==bekar method2:  
//     res.send('hello WRLD POST ! ')  // Yeah it can be seen on the web dev console page ..
//     console.log("Hey a Post Req is Hit ")
// }).put('/', (req, res) => {
//     res.send('hello WRLD PUT ! ')
//     console.log("Hey a PUT Req is Hit ")
// })


// sendFile: use to show a whole file in place of a single sentence 
app.get("/index", (req,res)=> {
    console.log("Hey its a index ...!")
    res.sendFile('templates/index.html', {root:__dirname})
} )


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


