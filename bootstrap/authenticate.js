const { initialize, session } = require('@anarklab/expressive-passport')
const MongoStore = require('connect-mongo')(session)
const User = require('../app/Users/model')
const { MONGODB } = require('../config/database')
const { key } = require('../config/app')

module.exports = initialize(User, {
  session: {
    secret: key,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      url: MONGODB
    })
  },
  secret: key
})
