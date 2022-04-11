import express from 'express';
import config from './config/config.js'
import cors from 'cors'
import ProductRouter from './routes/product.routes.js';

const app = express()

if(config.NODE_ENV == 'develop') app.use(cors())
// configura nuestro directorio estático
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
const productRouter = new ProductRouter()
app.get('/', (req, res) => res.send('Inicio'))
app.use('/api/products', productRouter.start())

// Server
const server = app.listen(config.PORT, () => {
    console.log(`Server listen on ${config.PORT} (${config.NODE_ENV} - ${config.TYPE_DB})`)
})
server.on('error', e => console.error(`SERVER ERROR: `, e))