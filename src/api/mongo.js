import { connect } from 'mongoose'

const setup = () => {
  const dbUri = process.env.MONGO_URI
  connect(
    dbUri,
    {
      useNewUrlParser: true
    }
  )
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
