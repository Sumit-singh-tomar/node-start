const ProductClass = require('../models/product')
const CartModel = require('../models/cart')

exports.shopPage = (req, res) => {
    ProductClass.fetchAll()
    .then((rows) => { 
        res.render('shop', { data: rows[0] }) 
    })
}

exports.buyItem = (req, res) => {
    ProductClass.findProductById(req.params.pid, (data) => {
        CartModel.addProductToCart(data.productId, data.title, () => {
            res.redirect('/cart')
        })
    })
}