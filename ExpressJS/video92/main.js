const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

//Veiw eng. here is ESJ  same as passing parameters in reaCT 
//to use veriable in index.html ==> use <%= siteName %>
app.get('/', (req, res) => {
    let siteName = "Addidas"
    let content = "Its a very solid brand "
    res.render(
        "index",
        {
            siteName: siteName,
            content: content
        }
    )
})

app.get('/', (res, req) => {
    let blogTitle = "Why Addidas"
    let blogContent = "Its a very solid brand "
    res.render(
        "templets/blogPost.html",
        {
            blogContent: blogContent,
            blogTitle: blogTitle
        }
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})