const http = require("http")
const express = require("express")
const app = express()
const path = require('path')

const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin')
const dataRouter = require('./routes/shop')
const editProductRouter = require('./routes/edit')
const cartRouter = require('./routes/cart')

// adding middlware

app.set("view engine", "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use('/admin', adminRouter)
app.use('/shop', dataRouter)
app.use('/edit', editProductRouter)
app.use('/cart', cartRouter)

app.use('/', (req, res) => {
    res.status(404).send('page not found!')
})

const server = http.createServer(app)
server.listen(4000)
//app.listen(4000) // it create internally createServer 