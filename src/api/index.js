import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger'
import mongo from './mongo'
import routeV1 from './routes/v1'

mongo.setup()

const router = express.Router()

router.get('/docs.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

router.get('/status', function (req, res) {
  res.send('OK')
})

router.use('/v1', routeV1)

export default router
