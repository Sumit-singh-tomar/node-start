const express = require('express')
const router = express.Router()
const editController = require('../Controllers/edit')

router.get('/editproduct', editController.getEditProduct)

router.get('/saveEditProduct',editController.saveEditProduct )

router.get('/deleteProduct', editController.deleteProduct)

module.exports = router