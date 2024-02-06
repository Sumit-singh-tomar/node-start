const http = require("http")
const express = require("express")
const app = express()

// adding middlware

app.use((req, res, next) => {
    console.log('middleware-1')
    next()
})

app.use((req, res, next) => {
    console.log('middleware-2')
    next()
})

app.use((req, res, next) => {
    console.log('middleware-3')
    res.send("hello world form middleware three")
})

const server = http.createServer(app)

server.listen(4000)