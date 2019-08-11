import swaggerJSDoc from 'swagger-jsdoc'

const host = process.env.HOST
const port = process.env.PORT
const version = process.env.VERSION
const swaggerDefinition = {
  info: {
    title: 'Authorization Service API',
    version: version,
    description: 'API Documentation for TL Authorization Service'
  },
  host: `${host}:${port}`,
  basePath: '/',
  produces: [
    'application/json'
  ],
  consumes: [
    'application/json'
  ],
  schemes: [
    'http'
  ]
}

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./docs/api/**/*.yaml']
}

// initialize swagger-jsdoc
export default swaggerJSDoc(options)
