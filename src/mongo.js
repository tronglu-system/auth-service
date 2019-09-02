import { connect } from 'mongoose'

const setup = () => {
  const dbHost = process.env.MONGO_URL
  const dbPort = process.env.MONGO_PORT
  const dbName = process.env.MONGO_DB_NAME
  connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)
    .then(db => {
      console.log('Connect to database successfully')
    })
    .catch(err => {
      console.log('Could not connect to database', err)
    })
}

export default {
  setup
}
