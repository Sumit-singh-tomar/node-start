const express = require('express')
const router = express.Router()
const ProductClass = require('../models/product')

router.get('/editproduct', (req, res) => {
    ProductClass.findProductById(req.query.pid, (data) => {
        res.render("edit-product", { data: data })
    })
})


router.get('/saveEditProduct', (req, res) => {
    ProductClass.saveModified(req.query.pid, req.query.title, () => {
        res.redirect('/shop')
    })
})

router.get('/deleteProduct', (req, res) => {
    ProductClass.deleteProduct(req.query.pid, () => {
        res.redirect('/shop')
    })
})

module.exports = router