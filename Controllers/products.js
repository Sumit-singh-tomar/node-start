const viewPath = require('../util/path')
const ProductClass = require('../models/product')


exports.addProductPage = (req, res) => {
    res.sendFile(viewPath("addProduct.html"))
}

exports.addProduct = (req, res) => {
    ProductClass.save(req.body.title).then((rows)=>{
        res.redirect("/shop")
    })
}