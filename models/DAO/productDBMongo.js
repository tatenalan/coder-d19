import mongodb from 'mongodb'
import ProductBaseDAO from './baseDAO.js'

const { MongoClient, ObjectId } = mongodb

class ProductDBMongoDAO extends ProductBaseDAO {
    
    constructor(database, collection) {
        super()
        ( async () => {
            console.log(`Connecting mongo DB ...`)

            const connection = await MongoClient.connect(`mongodb://127.0.0.1:27017/db`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            const db = connection.db(database)
            this._collection = db.collection(collection)
        })()
    }

    getProducts = async _id => {
        try {
            if(_id) {
                console.log(`Search, ${_id}`);
                const product = await this._collection.findOne({_id: ObjectId(_id)})
                console.log(product);
                return [product]
            } else {
                const products = await this._collection.findOne({}).toArray()
                return products
            }
        } catch (error) {
            console.log('Error to get products', error)
            return []
        }
    }

    insertProduct = async (product) => { 
        try {
            await this._collection.insertOne(product)

            return product
        } catch (e) {
            console.log('Error to insert product', e)
            return product
        } 
    }
}

export default ProductDBMongoDAO