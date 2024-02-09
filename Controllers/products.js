const viewPath = require('../util/path')
const ProductClass = require('../models/product')


exports.addProductPage = (req, res) => {
    res.sendFile(viewPath("addProduct.html"))
}

exports.addProduct = (req, res) => {
    const prod1 = new ProductClass(req.body.title)
    prod1.save()
    res.redirect("/admin/add-product")
}
