import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger'

const app = express()

app.get('/api-docs.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default app
