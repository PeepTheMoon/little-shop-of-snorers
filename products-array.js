// import productData
import { productData } from './product-data.js';

export class ProductsArray {
    //constructor that intializes an object within a class
    constructor(products) {
        // .slice() to make a copy without altering the original array
        this.products = products.slice();
       // return the copy
    }
    getProducts() {
        return this.products;
    }
    // get product images
    getProductImage() {
        return this.image;
    }
    
}