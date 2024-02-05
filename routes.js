const fs = require("fs")

function requestHandler(req,res) {
    if (req.url === '/') {
        try {
            var fileData = fs.readFileSync("hello.txt")
        }
        catch (e) {
            console.log(e)
        }
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>create File</title></head>")
        res.write(`${fileData}`)
        res.write("<body><form action='/message' method='POST'><input type='text' name='message' /> <button type='submit'>Click</button> </form></body>")
        res.write("</html>")
        return res.end()
    }
    else if (req.url === '/message' && req.method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString().split("=")[1]
            console.log(parsedbody);
            res.statusCode = 302;
            res.setHeader("Location", "/")
            fs.writeFileSync("hello.txt", parsedbody)
            return res.end()
        })
    }
    else if (req.url === '/node') {
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>request and response page</title></head>")
        res.write("<body><h1>Welcome to my node Js project</h1></body>")
        res.write("</html>")
        return res.end()
    }
    else if (req.url === '/home') {
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>request and response page</title></head>")
        res.write("<body><h1>Welcome Home</h1></body>")
        res.write("</html>")
        return res.end()
    }
    else if (req.url === '/about') {
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>request and response page</title></head>")
        res.write("<body><h1>Welcome to About Us Page</h1></body>")
        res.write("</html>")
        return res.end()
    }
    else {
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>request and response page</title></head>")
        res.write("<body>Go to Node Page <form action='/node' method='POST'><button type='submit'>click</button></form></body><br>")
        res.write("<body>Go to home Page <form action='/home' method='POST'><button type='submit'>click</button></form></body><br>")
        res.write("<body>Go to about Page <form action='/about' method='POST'><button type='submit'>click</button></form></body><br>")
        res.write("</html>")
        return res.end()
    }
}

module.exports = requestHandler