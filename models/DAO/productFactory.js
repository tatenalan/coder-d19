import ProductDBMongoDAO from './productDBMongo.js'

class ProductFactoryDAO {
    static get(type) {
        switch(type.toLowerCase()) {
            case 'mongo': return new ProductDBMongoDAO('desafio19', 'products')
            default: console.log('add a type');
        }
    }
}

export default ProductFactoryDAO