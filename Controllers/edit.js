const ProductClass = require('../models/product')

exports.getEditProduct = (req, res) => {
    ProductClass.findProductById(req.query.pid).then((rows) => {
        res.render("edit-product", { data: rows[0] })
    })
}

exports.saveEditProduct = (req, res) => {
    ProductClass.saveModified(req.query.pid, req.query.title).then((rows) => {
        res.redirect('/shop')
    })
}

exports.deleteProduct = (req, res) => {
    ProductClass.deleteProduct(req.query.pid).then((rows) => {
        res.redirect('/shop')
    })
}