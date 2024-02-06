const http = require("http")
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin')
const dataRouter = require('./routes/shop')
// adding middlware

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/admin',adminRouter)
app.use('/shop', dataRouter)

app.use('/', (req, res) => {
    res.status(404).send('page not found!')
})

const server = http.createServer(app)
server.listen(4000)
//app.listen(4000) // it create internally createServer 