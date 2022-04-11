import config from '../config/config.js'
import ProductFactoryDAO from '../models/DAO/productFactory.js'
import Product from '../models/entities/product.model.js'

class ProductService {
    constructor() {
        this.productDAO = ProductFactoryDAO.get(config.TYPE_DB)
    }

    async getProducts(id) {
        return await this.productDAO.getProducts(id)
    }

    async insertProduct(product) {
        ProductService.validateProduct(product)
        return await this.productDAO.insertProduct(product)
    }

    static validateProduct(product, require) {
        try {
            Product.validate(product, require)
        } catch (e) {
            throw new Error('Product is invalid')
        }
    }
}


export default ProductService