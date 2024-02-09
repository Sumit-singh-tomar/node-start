const fs = require('fs')
const path = require('path')
const builtPath = path.join(path.dirname(require.main.filename), "data", "data.txt")

module.exports = class product {
    constructor(item) {
        this.title = item
    }

    save() {
        let products = []

        fs.readFile(builtPath, (err, data) => {
            if (!err) {
                products = JSON.parse(data)
            }
            products.push(this)
            fs.writeFile(builtPath, JSON.stringify(products), (e) => {
                console.log(e)
            })
        })
    }

    static fetchAll(callBackFn) {
        fs.readFile(builtPath, (err, data) => {
            if (err) {
                return callBackFn([])
            }
            else {
                return callBackFn(JSON.parse(data))
            }
        })
    }
}