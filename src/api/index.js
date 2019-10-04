import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger'
import mongo from './mongo'

mongo.setup()

const router = express.Router()

router.get('/docs.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default router
