import express from 'express'
import swaggerUi from 'swagger-ui-express'

import { produtoRouter } from './routes/produtoRouter'
import swaggerDocument from './config/swagger.json'

const app = express()

app.use(express.json())

app.use('/docs-api', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/v1/produtos', produtoRouter)

export { app }