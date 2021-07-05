const http = require ('http')
const fs = require('fs')
const hostname = "127.0.0.1";
const port = 5000;
const server = http.createServer((req, res) => {
    statusCode = 200;
    res.setheader = {"content-Type": "text/html"};
    let path ="./pages/";
    if(req.url === "/" || req.url === "/home") {
        path = path + "home.html"
    }

    else if(req.url === "/contact") {
        path = path + "contact.html"
    }

    else if(req.url === "/about" || req.url === "/about-us") {
        path = path + "about.html"
    }

    else  {
        path = path + "error.html"
    }
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            return;
        }
        res.end(data);
    });
});
server.listen(port, hostname, ()=>{
    console.log(`server listening on http:${hostname}:${port}`)
})