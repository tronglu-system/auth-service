import express from 'express'
import path from 'path'
import swaggerUi from 'swagger-ui-express'

const router = express.Router()

const swaggerSpec = require('yamljs').load(
  path.join(__dirname, 'swagger.v1.yaml')
)
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default router
