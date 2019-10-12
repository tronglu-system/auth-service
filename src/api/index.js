import express from 'express'
import mongo from './mongo'
import routeV1 from './routes/v1'

mongo.setup()

const router = express.Router()

router.get('/status', function (req, res) {
  res.send('OK')
})

router.use('/v1', routeV1)

export default router
