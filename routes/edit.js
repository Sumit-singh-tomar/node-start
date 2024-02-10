const express = require('express')
const router = express.Router()
const ProductClass = require('../models/product')

router.get('/editproduct', (req, res) => {
    ProductClass.findProductById(req.query.pid).then((rows) => {
        console.log(rows[0])
        res.render("edit-product", { data: rows[0] })
    })
})


router.get('/saveEditProduct', (req, res) => {
    ProductClass.saveModified(req.query.pid, req.query.title).then((rows) => {
        console.log(rows);
        res.redirect('/shop')
    })
})

router.get('/deleteProduct', (req, res) => {
    ProductClass.deleteProduct(req.query.pid).then((rows) => {
        res.redirect('/shop')
    })
})

module.exports = router