const viewPath = require('../util/path')
const ProductClass = require('../models/product')
const CartModel = require('../models/cart')

exports.shopPage = (req, res) => {
    ProductClass.fetchAll((data) => {
        res.render('shop', { data: data })
    })
}

exports.buyItem = (req, res) => {
    ProductClass.findProductById(req.params.pid, (data) => {
        CartModel.addProductToCart(data.productId, data.title, () => {
            res.redirect('/cart')
        })
    })
}