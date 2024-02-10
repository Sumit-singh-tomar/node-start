const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Your Product Added in Cart Successfully')
})

module.exports = router