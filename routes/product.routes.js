const { Router } = require('express')
const { getProductController, insertProductController }  = require('../controllers/product.controller.js')

const productRouter = new Router()

productRouter.get('/', getProductController)
productRouter.post('/', insertProductController)

module.exports = { productRouter }