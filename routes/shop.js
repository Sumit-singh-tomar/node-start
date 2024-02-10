const express = require('express')
const router = express.Router()
const shopController = require('../Controllers/shop')

router.get('/', shopController.shopPage)

router.get('/buy', shopController.buyItem)

router.get('/buy/:pid', shopController.buyItem)


module.exports = router;