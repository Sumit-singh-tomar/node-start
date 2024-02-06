const http = require("http")
const express = require("express")
const app = express()
const bodyParser = require('body-parser')

// adding middlware

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/add-product', (req, res, next) => {
    console.log('middleware-2')
    res.send("<form action='/user' method='POST'><input type='text' name='title' /> <input type='text' name='size' /> <button type='submit'>Send</button> </form>")
})

app.use('/user', (req, res, next) => {
    console.log(req.body)
    res.redirect("/add-product")
})

app.use('/', (req, res, next) => {
    console.log('middleware-1')
    res.send("<h1>Hello from middleware-1</h1>")
})


// app.use((req, res, next) => {
//     console.log('middleware-3')
//     res.send({key1:'value1'})
// })

// const server = http.createServer(app)

app.listen(4000)