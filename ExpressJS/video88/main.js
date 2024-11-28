const express = require('express')
const app = express()
const port = 3000


//app.get or app.put or app.post or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World 2  !')
})
app.get('/about', (req, res) => {
  res.send('Hello World this is About   !')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact !')
})

app.get('/blog', (req, res) => {
  res.send('Hello Blog 2 !')
})


// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('intro-to-js !')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('intro-to-python !')
// })

app.get('/blog/:slug ',  (req, res) => {
  res.send(`${req.params.slug}`)
})
// app.get('/blog/:slug/:second ',  (req, res) => {
//   res.send(`${req.params.slug} and ${req.params.second}`)
// })

// http://127.0.0.1:3000/blog/intro-to-dru429?mode=dark&region=In
//using question markk we get all valeus and pair in the object named query in req so req.querry 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})