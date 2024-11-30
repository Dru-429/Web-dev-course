const express = require("express")
const router = express.Router()

router.get("/",(req,res) => {
    res.send("Shop Homepage ")
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About Shop')
  })
  
  // define the about route
  router.get('/shopabout/:slug', (req, res) => {
    res.send(`fetch the About for ${req.params.slug}`)
  })
  
  module.exports = router