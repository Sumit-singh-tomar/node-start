const http = require("http")
const routes = require("./routes")

const server = http.createServer(routes)

server.listen(4000)


// const server = http.createServer((req, res) => {
//     if (req.url === '/node') {
//         res.setHeader("Content-Type", "text/html")
//         res.write("<html>")
//         res.write("<head><title>request and response page</title></head>")
//         res.write("<body><h1>Welcome to my node Js project</h1></body>")
//         res.write("</html>")
//         return res.end()
//     }
//     else if(req.url === '/home'){
//         res.setHeader("Content-Type", "text/html")
//         res.write("<html>")
//         res.write("<head><title>request and response page</title></head>")
//         res.write("<body><h1>Welcome Home</h1></body>")
//         res.write("</html>")
//         return res.end()
//     }
//     else if(req.url === '/about'){
//         res.setHeader("Content-Type", "text/html")
//         res.write("<html>")
//         res.write("<head><title>request and response page</title></head>")
//         res.write("<body><h1>Welcome to About Us Page</h1></body>")
//         res.write("</html>")
//         return res.end()
//     }
//     else{
//         res.setHeader("Content-Type", "text/html")
//         res.write("<html>")
//         res.write("<head><title>request and response page</title></head>")
//         res.write("<body>Go to Node Page <form action='/node' method='POST'><button type='submit'>click</button></form></body><br>")
//         res.write("<body>Go to home Page <form action='/home' method='POST'><button type='submit'>click</button></form></body><br>")
//         res.write("<body>Go to about Page <form action='/about' method='POST'><button type='submit'>click</button></form></body><br>")
//         res.write("</html>")
//         return res.end()
//     }
// })
