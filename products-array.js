export class ProductsArray {
    constructor(products) {
        this.products = products.slice();
    }
    getProducts() {
        return this.products;
    }
}