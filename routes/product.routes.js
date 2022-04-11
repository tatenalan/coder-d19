import express from 'express'
const productRouter = express.Router()

import ProductController  from '../controllers/product.controller.js'

class ProductRouter {

    constructor() {
        this.productController = new ProductController()
    }
    
    start() {
        productRouter.get('/:id?', this.productController.getProducts)
        productRouter.post('/', this.productController.insertProduct)

        return productRouter
    }
        
}

export default ProductRouter