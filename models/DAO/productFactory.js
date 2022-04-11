import ProductMongoDAO from './productDBMongo.js'

class ProductFactoryDAO {
    static get(type) {
        switch(type.toLowerCase()) {
            case 'mongo': return new ProductMongoDAO
            default: console.log('add a type');
        }
    }
}

export default ProductFactoryDAO