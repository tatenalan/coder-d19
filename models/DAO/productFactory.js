import ProductDBMongoDAO from './productDBMongo.js'

class ProductFactoryDAO {
    static get(type) {
        switch(type.toLowerCase()) {
            case 'mongo': return new ProductDBMongoDAO('db', 'products')
            default: 'mongo';
        }
    }
}

export default ProductFactoryDAO