const { initialize, session } = require('@anarklab/expressive-passport')
const MongoStore = require('connect-mongo')(session)
const User = require('../app/Users/model')
const {
  DB_CONNECTION,
  DB_HOSTNAME,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD
} = require('../config/database')
const { key } = require('../config/app')

module.exports = initialize(User, {
  session: {
    secret: key,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      url: `${DB_CONNECTION}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
    })
  },
  secret: key
})
