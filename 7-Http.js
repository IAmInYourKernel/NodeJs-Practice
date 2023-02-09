const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write(`<h1>Welcome to our home page</h1>`)
        res.end();
    }
    if(req.url==="/about"){
        res.write(`<h1>This is our about page</h1>`)
        res.end();
    }
    res.end(`
    <h1>Oops</h1>
    <P>You are at the wrong page</p>
    `)
})

server.listen(4000  )