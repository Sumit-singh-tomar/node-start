const express = require('express')
const router = express.Router()
const productController = require('../Controllers/products')

router.get('/add-product', productController.addProductPage)

router.post('/user', productController.addProduct)

module.exports = router;