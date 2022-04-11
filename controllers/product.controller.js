import ProductService from '../services/product.service.js'


class ProductController {
    constructor() {
        this.productService = new ProductService()
    }

    getProducts = async(req, res) => {
        try {
            const id = req.params.id
            const products = await this.productService.getProducts(id)
            res.json(products)
        } catch (e) {
            console.log(`error to get products `, e)
        }
    }

    insertProduct = async(req, res) => {
        try {
            const product = req.body
            const productReturn = await this.productService.insertProduct(product)
            res.status(201).json(productReturn)
        } catch (e) {
            console.log(`error to insert product `, e)
        }       
    }
}

export default ProductController