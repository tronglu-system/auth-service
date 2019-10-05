import swaggerJSDoc from 'swagger-jsdoc'

const host = process.env.HOST
const documentVersion = process.env.VERSION
const apiVersion = process.env.API_VERSION
const swaggerDefinition = {
  info: {
    title: 'Authorization Service API',
    version: documentVersion,
    description: 'API Documentation for TL Authorization Service'
  },
  host: host,
  basePath: `/api/v${apiVersion}`,
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
