const fs = require('fs')
const path = require('path')

const builtPath = path.join(path.dirname(require.main.filename), "data", "cart.txt")

module.exports = class Cart {
    static addProductToCart(pid, title, callBackFn) {
        fs.readFile(builtPath, (err, data) => {
            if (!err) {
                data = JSON.parse(data)
                let oldData = ''
                let index = ''
                data.map((item, i) => {
                    if (item.productId == pid) {
                        index = i
                        oldData = item
                    }
                })

                let arr = [...data]
                arr[index] = { title: title, productId: pid, qty: oldData.qty + 1 }

                fs.writeFile(builtPath, JSON.stringify(arr), (e) => {
                    callBackFn()
                    console.log(e)
                })
            }
            else {
                const cartProduct = [{ title: title, productId: pid, qty: 1 }]
                fs.writeFile(builtPath, JSON.stringify(cartProduct), (e) => {
                    callBackFn()
                    console.log(e)
                })
            }
        })
    }
}