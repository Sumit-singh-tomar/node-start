const fs = require('fs')
const path = require('path')
const builtPath = path.join(path.dirname(require.main.filename), "data", "data.txt")

module.exports = class product {
    constructor(item) {
        this.title = item
        this.productId = Math.round(Math.random() * 1000)
    }

    save(callBackFn) {
        let products = []

        fs.readFile(builtPath, (err, data) => {
            if (!err) {
                products = JSON.parse(data)
            }
            products.push(this)
            fs.writeFile(builtPath, JSON.stringify(products), (e) => {
                callBackFn()
                console.log(e)
            })
        })
    }

    static saveModified(pid, title, callBackFn) {
        fs.readFile(builtPath, (err, data) => {
            if (!err) {
                let index = ''
                data = JSON.parse(data)
                data.map((item, i) => {
                    if (item.productId == pid) {
                        index = i;
                    }
                })
                let arr = [...data]
                arr[index] = { title: title, productId: pid }

                fs.writeFile(builtPath, JSON.stringify(arr), (e) => {
                    callBackFn()
                    console.log(e)
                })
            }
        })
    }

    static deleteProduct(pid, callBackFn) {
        fs.readFile(builtPath, (err, data) => {
            if (!err) {
                let index = ''
                data = JSON.parse(data)
                data.map((item, i) => {
                    if (item.productId == pid) {
                        index = i;
                    }
                })
                let arr = [...data]
                arr.splice(index, 1)

                fs.writeFile(builtPath, JSON.stringify(arr), (e) => {
                    callBackFn()
                    console.log(e)
                })
            }
        })
    }

    static fetchAll(callBackFn) {
        fs.readFile(builtPath, (err, data) => {
            if (err) {
                callBackFn([])
            }
            else {
                callBackFn(JSON.parse(data))
            }
        })
    }

    static findProductById(pid, callBackFn) {
        fs.readFile(builtPath, (err, data) => {
            if (err) {
                callBackFn([])
            }
            else {
                data = JSON.parse(data)
                data.map((item) => {
                    if (item.productId == pid) {
                        callBackFn(item)
                    }
                })
            }
        })
    }

}