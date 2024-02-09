const viewPath = require('../util/path')
const ProductClass = require('../models/product')

exports.shopPage =  (req, res) => {
    var a = ProductClass.fetchAll()
    console.log(a)
    res.sendFile(viewPath('shop.html'))
}