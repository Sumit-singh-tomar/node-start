const sqldb = require('../connection/database')

module.exports = class product {
    static save(title) {
        return sqldb.execute("INSERT INTO product (title) VALUES (?)", [title])
    }

    static saveModified(pid, title) {
        return sqldb.execute("UPDATE product set title=? WHERE id = ?", [title, pid])
    }

    static deleteProduct(pid) {
        return sqldb.execute("DELETE FROM product WHERE id=?",[pid])
    }

    static fetchAll() {
        return sqldb.execute("SELECT * FROM product")
    }

    static findProductById(pid) {
        return sqldb.execute("SELECT * FROM product WHERE id = ?",[pid])
    }

}





// module.exports = class product {
//     constructor(item) {
//         this.title = item
//         this.productId = Math.round(Math.random() * 1000)
//     }

//     save(callBackFn) {
//         let products = []

//         fs.readFile(builtPath, (err, data) => {
//             if (!err) {
//                 products = JSON.parse(data)
//             }
//             products.push(this)
//             fs.writeFile(builtPath, JSON.stringify(products), (e) => {
//                 callBackFn()
//                 console.log(e)
//             })
//         })
//     }

//     static saveModified(pid, title, callBackFn) {
//         fs.readFile(builtPath, (err, data) => {
//             if (!err) {
//                 let index = ''
//                 data = JSON.parse(data)
//                 data.map((item, i) => {
//                     if (item.productId == pid) {
//                         index = i;
//                     }
//                 })
//                 let arr = [...data]
//                 arr[index] = { title: title, productId: pid }

//                 fs.writeFile(builtPath, JSON.stringify(arr), (e) => {
//                     callBackFn()
//                     console.log(e)
//                 })
//             }
//         })
//     }

//     static deleteProduct(pid, callBackFn) {
//         fs.readFile(builtPath, (err, data) => {
//             if (!err) {
//                 let index = ''
//                 data = JSON.parse(data)
//                 data.map((item, i) => {
//                     if (item.productId == pid) {
//                         index = i;
//                     }
//                 })
//                 let arr = [...data]
//                 arr.splice(index, 1)

//                 fs.writeFile(builtPath, JSON.stringify(arr), (e) => {
//                     callBackFn()
//                     console.log(e)
//                 })
//             }
//         })
//     }

//     static fetchAll(callBackFn) {
//         fs.readFile(builtPath, (err, data) => {
//             if (err) {
//                 callBackFn([])
//             }
//             else {
//                 callBackFn(JSON.parse(data))
//             }
//         })
//     }

//     static findProductById(pid, callBackFn) {
//         fs.readFile(builtPath, (err, data) => {
//             if (err) {
//                 callBackFn([])
//             }
//             else {
//                 data = JSON.parse(data)
//                 data.map((item) => {
//                     if (item.productId == pid) {
//                         callBackFn(item)
//                     }
//                 })
//             }
//         })
//     }

// }