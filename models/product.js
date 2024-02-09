const products = []

module.exports = class product {
    constructor(item) {
        this.title = item
    }

    save(){
        products.push(this)
    }

    static fetchAll(){
        return products
    }
}