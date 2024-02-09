const viewPath = require('../util/path')
const ProductClass = require('../models/product')

exports.shopPage = (req, res) => {
    ProductClass.fetchAll((data) => {
        res.render('shop', { data: data })
    })
}