const express = require('express')
const router = express.Router()

router.get('/add-product', (req, res) => {
    res.send("<form action='/admin/user' method='POST'><input type='text' name='title' /> <input type='text' name='size' /> <button type='submit'>Send</button> </form>")
})

router.post('/user', (req, res) => {
    console.log(req.body)
    res.redirect("/admin/add-product")
})

module.exports = router;